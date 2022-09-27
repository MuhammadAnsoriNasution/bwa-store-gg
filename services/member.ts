import { callApi } from "../config/api";
import { API } from "../utils/api";
import { UserTypes } from "./data-types";


export async function getMemberOverview() {
    return callApi({
        url: `${API}/players/dashboard`,
        method: 'GET',
        data: null,
        token: true
    })
}

export async function getMemberTransactions(valueParam: string) {
    let params = ''
    if (valueParam !== 'all') {
        params = '?status=' + valueParam
    }

    return callApi({
        url: `${API}/players/history${params}`,
        method: 'GET',
        data: null,
        token: true
    })
}


export async function getMemberTransactionDetail(idTrx: string, token: string) {
    return callApi({
        url: `${API}/players/history/${idTrx}/detail`,
        method: 'GET',
        data: null,
        serverToken: token
    })
}


export async function updateProfile(data: FormData, id: string) {
    return callApi({
        url: `${API}/players/profile/${id}}`,
        method: 'PUT',
        data,
        token: true
    })
}