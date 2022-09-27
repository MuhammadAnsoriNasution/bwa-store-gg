import jwtDecode from 'jwt-decode'
import React from 'react'
import TransactionDetailContent from '../../../components/organisms/TransactionDetailContent'
import { HistoryTransactionTypes, JwtPayloadTypes, UserTypes } from '../../../services/data-types'
import { getMemberTransactionDetail } from '../../../services/member'
import { API_IMG } from '../../../utils/api'

interface TransactionsDetailProps {
    transactionDetaill: HistoryTransactionTypes
}
export default function TransactionsDetail({ transactionDetaill }: TransactionsDetailProps) {
    return (
        <section className="transactions-detail overflow-auto">
            <TransactionDetailContent data={transactionDetaill} />
        </section>
    )
}



interface getServerSidePropsTypes {
    req: {
        cookies: {
            token: string
        }
    },
    params: {
        idTrx: string
    }
}
export async function getServerSideProps({ req, params }: getServerSidePropsTypes) {
    const { token } = req.cookies
    const { idTrx } = params
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

    const transactionDetaill = await getMemberTransactionDetail(idTrx, jwtToken)
    return {
        props: {
            transactionDetaill: transactionDetaill.data
        }
    }
}
