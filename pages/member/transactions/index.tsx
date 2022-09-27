import jwtDecode from 'jwt-decode'
import React from 'react'
import Sidebar from '../../../components/organisms/Sidebar'
import TransactionContent from '../../../components/organisms/TransactionContent'
import { JwtPayloadTypes, UserTypes } from '../../../services/data-types'
import { API_IMG } from '../../../utils/api'

export default function Transactions() {
    return (
        <section className="transactions overflow-auto">
            <Sidebar activeMenu='transactions' />
            <TransactionContent />
        </section>
    )
}



interface getServerSidePropsTypes {
    req: {
        cookies: {
            token: string
        }
    }
}
export async function getServerSideProps({ req }: getServerSidePropsTypes) {
    const { token } = req.cookies
    if (!token) {
        return {
            redirect: {
                destination: '/sign-in',
                parmanent: false
            }
        }
    }

    const jwtToken = Buffer.from(token, 'base64').toString('ascii');
    const payload: JwtPayloadTypes = jwtDecode(jwtToken)
    const userFromPayload: UserTypes = payload.player
    userFromPayload.avatar = `${API_IMG}/${userFromPayload.avatar}`

    return {
        props: {
            user: userFromPayload
        }
    }
}


