import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../Footer'
import MenuItem from './MenuItem'
import Profile from './Profile'

interface SidebarProps {
    activeMenu: 'overview' | 'transactions' | 'settings'
}
export default function Sidebar({ activeMenu }: SidebarProps) {
    const router = useRouter()
    const onLogout = () => {
        Cookies.remove('token')
        router.push('/sign-in')
    }

    return (
        <section className="sidebar">
            <div className="content pt-50 pb-30 ps-30">
                <Profile />
                <div className="menus">
                    <MenuItem title="Overview" icon='icon-menu-overview' active={activeMenu === 'overview'} />
                    <MenuItem title="Transactions" icon='icon-menu-transaction' href='/member/transactions' active={activeMenu === "transactions"} />
                    <MenuItem title="Messages" icon='icon-menu-message' href='/member' />
                    <MenuItem title="Card" icon='icon-menu-card' href='/member' />
                    <MenuItem title="Rewards" icon='icon-menu-rewards' href='/member' />
                    <MenuItem title="Settings" icon='icon-menu-setting' href='/member/edit-profile' active={activeMenu === "settings"} />
                    <MenuItem title="Log Out" icon='icon-menu-logout' onClick={onLogout} />
                </div>
                <Footer />
            </div>
        </section>
    )
}
