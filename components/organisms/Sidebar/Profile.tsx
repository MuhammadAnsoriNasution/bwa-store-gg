import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import React, { useEffect, useState } from 'react'
import { JwtPayloadTypes, UserTypes } from '../../../services/data-types';
import { API_IMG } from '../../../utils/api';

export default function Profile() {
    const [user, setUser] = useState<UserTypes>({
        avatar: '',
        email: '',
        id: '',
        name: '',
        username: ''
    })
    useEffect(() => {
        const token = Cookies.get('token')
        if (token) {
            const jwtToken = window.atob(token!);
            const payload: JwtPayloadTypes = jwtDecode(jwtToken)
            const userFromPayload: UserTypes = payload.player
            userFromPayload.avatar = `${API_IMG}/${userFromPayload.avatar}`
            setUser(userFromPayload)
        }

    }, [])

    return (
        <div className="user text-center pb-50 pe-30">
            <img src={`${user.avatar}`} width="90" height="90" className="img-fluid mb-20" alt='avatar' style={{ borderRadius: '100%', objectFit: 'cover' }} />
            <h2 className="fw-bold text-xl color-palette-1 m-0" >{user.name}</h2>
            <p className="color-palette-2 m-0">{user.email}</p>
        </div>
    )
}
