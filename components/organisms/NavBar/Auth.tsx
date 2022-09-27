import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { JwtPayloadTypes, UserTypes } from '../../../services/data-types';
import { API_IMG } from '../../../utils/api';
import ToogleMenu from './ToggleMenu';

export default function Auth() {
    const [isLogin, setIsLogin] = useState(false)

    const [user, setUser] = useState<UserTypes>({
        avatar: '',
        email: '',
        id: '',
        name: '',
        username: ''
    })
    const router = useRouter()

    useEffect(() => {
        const token = Cookies.get('token')
        if (token) {
            const jwtToken = window.atob(token!);
            const payload: JwtPayloadTypes = jwtDecode(jwtToken)
            const userFromPayload: UserTypes = payload.player
            userFromPayload.avatar = `${API_IMG}/${userFromPayload.avatar}`
            setIsLogin(true)
            setUser(userFromPayload)
        }

    }, [])
    const onLogout = () => {
        Cookies.remove('token')
        router.push('/')
        setIsLogin(false)
    }
    if (isLogin) {
        return (
            <li className="nav-item my-auto dropdown d-flex">
                <div className="vertical-line d-lg-block d-none"></div>
                <div>
                    <ToogleMenu user={user} />
                    <ul className="dropdown-menu border-0" aria-labelledby="dropdownMenuLink">
                        <DropdownItem href="/member" title="My Profile" />
                        <DropdownItem href="/" title="Wallet" />
                        <DropdownItem href="/member/edit-profile" title="Account Settings" />
                        <DropdownItem href="/sign-in" title="Log Out" />
                    </ul>
                </div>
            </li>
        )
    }
    return (
        <>
            <li className="nav-item my-auto" onClick={onLogout}>
                <a className="btn btn-sign-in d-flex justify-content-center ms-lg-2 rounded-pill" role="button" href='#'>Sign In</a>
            </li>
        </>
    );
}
interface DropdownItemProps {
    href: string,
    title: string,

}

function DropdownItem({ href = '/', title }: DropdownItemProps) {
    return (
        <li>
            <Link href={href}>
                <a className="dropdown-item text-lg color-palette-2">{title}</a>
            </Link>
        </li>
    )
}
