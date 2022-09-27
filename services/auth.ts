import { callApi } from "../config/api";
import { API, API_IMG } from "../utils/api";
import { loginTypes } from "./data-types";

export async function setSignUp(data: FormData) {
    return callApi({
        url: `${API}/auth/signup`,
        method: 'POST',
        data: data
    })
}


export async function loginService(data: loginTypes) {
    return callApi({
        url: `${API}/auth/signin`,
        method: 'POST',
        data: data
    })

}