import { callApi } from "../config/api";
import { API } from "../utils/api";
import { CheckoutTypes } from "./data-types";


export async function getFeaturedGame() {
    return callApi({
        url: `${API}/players/landingpage`,
        method: 'GET',
        data: null
    })

}

export async function getDetailVoucher(id: string) {
    return callApi({
        url: `${API}/players/${id}/detail`,
        method: 'GET',
        data: null
    })
}


export async function getGameCategory() {
    return callApi({
        url: `${API}/players/category`,
        method: 'GET',
        data: null
    })
}


export async function setCheckout(data: CheckoutTypes) {
    return callApi({
        url: `${API}/players/checkout`,
        method: 'POST',
        data: data,
        token: true
    })
}

