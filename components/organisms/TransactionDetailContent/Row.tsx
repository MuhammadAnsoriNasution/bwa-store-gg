import React from 'react'

interface RowProps {
    label: string,
    value: string | number,
    classNames?: string
}
export default function Row({ label, value, classNames }: RowProps) {
    return (
        <p className="text-lg color-palette-1 mb-20">{label} <span
            className={`purchase-details ${classNames}`}>{value}</span></p>
    )
}
