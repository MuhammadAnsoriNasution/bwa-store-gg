import React from 'react'

interface ReachedItemProps {
    title: string,
    desc: string,
    horizontalLine: boolean,
    verticalLine: boolean
}
export default function ReachedItem({ title, desc, horizontalLine = true, verticalLine = true }: Partial<ReachedItemProps>) {
    return (
        <>
            <div className="me-lg-35">
                <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">{title}</p>
                <p className="text-lg text-lg-start text-center color-palette-2 m-0">{desc}</p>
            </div>
            {horizontalLine ? <div className="horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block"></div> : null}
            {verticalLine ? <div className="vertical-line me-lg-35 ms-lg-35 d-lg-block d-none"></div> : null}
        </>
    )
}
