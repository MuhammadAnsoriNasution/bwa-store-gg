import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string,
}
export default function Input({ label, ...nativeProps }: InputProps) {
    return (
        <>
            <label
                htmlFor={label}
                className="form-label text-lg fw-medium color-palette-1 mb-10"
            >{label}</label>
            <input
                type="text"
                className="form-control rounded-pill text-lg"
                id={label}
                name={label}
                aria-describedby={label}
                placeholder={"Enter your " + label}
                {...nativeProps}
            />
        </>
    )
}
