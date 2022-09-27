import axios, { AxiosRequestConfig } from "axios"
import Cookies from "js-cookie";


interface CallAPITypes extends AxiosRequestConfig {
    token?: boolean,
    serverToken?: string
}

export async function callApi({ url, method, data, token, serverToken }: CallAPITypes) {
    let headers = {

    }

    if (serverToken) {
        headers = {
            Authorization: `Bearer ${serverToken}`
        }
    } else if (token) {
        const tokenCookies = Cookies.get('token')
        if (tokenCookies) {
            const jwtToken = window.atob(tokenCookies);
            headers = {
                Authorization: `Bearer ${jwtToken}`
            }
        }
    }

    const response = await axios({
        url,
        method,
        data,
        headers
    }).catch((err) => err.response)
    if (response?.status > 300) {
        return {
            error: true,
            message: response.data.message,
            data: null
        }
    }
    let { length } = Object.keys(response.data)
    return {
        error: false,
        message: 'success',
        data: length > 1 ? response.data : response.data.data
    }
}