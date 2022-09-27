import jwtDecode from 'jwt-decode'
import React from 'react'
import OverViewContent from '../../components/organisms/OverViewContent'
import Sidebar from '../../components/organisms/Sidebar'
import { JwtPayloadTypes, UserTypes } from '../../services/data-types'
import { API_IMG } from '../../utils/api'

export default function Overview() {
    return (
        <>
            <section className="overview overflow-auto">
                <Sidebar activeMenu='overview' />
                <OverViewContent />
            </section>

        </>
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