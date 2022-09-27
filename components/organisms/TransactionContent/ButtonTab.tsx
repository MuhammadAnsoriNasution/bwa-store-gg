import classNames from 'classnames'
import React from 'react'

interface ButtonTabProps {
    title: string,
    active: boolean,
    onClick: () => void
}
export default function ButtonTab({ title, active, onClick }: ButtonTabProps) {
    const btnclass = classNames({
        'btn btn-status rounded-pill text-sm me-3': true,
        'btn-active': active
    })
    return (
        <button data-filter="*" type='button' className={btnclass} onClick={onClick}>{title}</button>
    )
}
