import Link from 'next/link'
import React from 'react'


interface FooterItemProps {
    href: string;
    title: string
}
export default function FooterItem({ href = "/", title }: Partial<FooterItemProps>) {
    return (
        <li className="mb-6">
            <Link href={href} >
                <a className="text-lg color-palette-1 text-decoration-none">{title}</a>
            </Link>
        </li>
    )
}
