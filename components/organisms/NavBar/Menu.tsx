import Link from "next/link";
import cx from 'classnames'
interface MenuProps {
    title: string;
    active?: boolean;
    href: string;

}

export default function Menu({ title, active, href = '#' }: Partial<MenuProps>) {
    const classTitle = cx({
        "nav-link": true,
        active
    })
    return (
        <li className="nav-item my-auto">
            <Link href={href}>
                <a className={classTitle} aria-current="page" >{title}</a>
            </Link>
        </li>
    );
}