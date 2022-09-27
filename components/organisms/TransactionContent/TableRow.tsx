import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'

interface TableRowProps {
    title: string,
    category: string,
    item: string,
    price: number,
    status: string,
    image: string,
    idTrx: string
}
export default function TableRow({ image, title, category, item, price, status, idTrx }: TableRowProps) {
    const statusClass = classNames({
        'float-start': true,
        'icon-status': true,
        'pending': status === "pending",
        'failed': status === 'failed',
        'success': status === 'success'
    })
    return (
        <tr data-category="pending" className="align-middle">
            <th scope="row">
                <img className="float-start me-3 mb-lg-0 mb-3" src={image}
                    width="80" height="60" alt="" />
                <div className="game-title-header">
                    <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
                    <p className="text-xs fw-normal text-start color-palette-2 m-0">{category}</p>
                </div>
            </th>
            <td>
                <p className="fw-medium color-palette-1 m-0">{item}</p>
            </td>
            <td>
                <p className="fw-medium color-palette-1 m-0">{price}</p>
            </td>
            <td>
                <div>
                    <span className={statusClass}></span>
                    <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                        {status}</p>
                </div>
            </td>
            <td>
                <Link href={`/member/transactions/${idTrx}`}>
                    <a className="btn btn-status rounded-pill text-sm">Details</a>
                </Link>

            </td>
        </tr>
    )
}
