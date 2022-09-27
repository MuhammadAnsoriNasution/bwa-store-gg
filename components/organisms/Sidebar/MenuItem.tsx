import classNames from 'classnames';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface MenuItemProps {
    title: string;
    icon: 'icon-menu-card' | 'icon-menu-logout' | 'icon-menu-message' | 'icon-menu-overview' | 'icon-menu-rewards' | 'icon-menu-setting' | 'icon-menu-transaction',
    active: boolean,
    href: string,
    onClick?: () => void
}
export default function MenuItem({ title, icon, href = '/', active = false, onClick }: Partial<MenuItemProps>) {
    const classItem = classNames({
        'item': true,
        'mb-30': true,
        active
    })
    return (
        <div className={classItem} onClick={onClick}>
            <div className='me-3'>
                <Image src={`/icon/${icon}.svg`} width={25} height={25} alt={icon} />
            </div>
            <p className="item-title m-0">
                {
                    onClick ?
                        <a className="text-lg text-decoration-none">{title}</a>
                        :
                        <Link href={href} >
                            <a className="text-lg text-decoration-none">{title}</a>
                        </Link>
                }
            </p>
        </div>
    )
}
