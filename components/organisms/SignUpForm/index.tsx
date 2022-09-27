import classNames from 'classnames';
import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function SignUpForm() {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const router = useRouter()
    const className = {
        label: classNames("form-label text-lg fw-medium color-palette-1 mb-10"),
        input: classNames("form-control rounded-pill text-lg")
    }

    const onSubmit = () => {
        const userForm = {
            name, email, password
        }
        localStorage.setItem('user-form', JSON.stringify(userForm))
        router.push('/sign-up-photo')
    }

    return (
        <>
            <h2 className="text-4xl fw-bold color-palette-1 mb-10">Sign Up</h2>
            <p className="text-lg color-palette-1 m-0">Daftar dan bergabung dengan kami</p>
            <div className="pt-50">
                <label className={className.label}>Full Name</label>
                <input
                    type="text"
                    className={className.input}
                    aria-describedby="name"
                    placeholder="Enter your name"
                    onChange={(e) => setname(e.target.value)}
                    value={name}
                />
            </div>
            <div className="pt-30">
                <label className={className.label}>Email
                    Address</label>
                <input
                    type="email"
                    className={className.input}
                    aria-describedby="email"
                    placeholder="Enter your email address"
                    onChange={(e) => setemail(e.target.value)}
                    value={email}
                />
            </div>
            <div className="pt-30">
                <label className={className.label}>Password</label>
                <input
                    type="password"
                    className={className.input}
                    aria-describedby="password"
                    placeholder="Your password"
                    onChange={(e) => setpassword(e.target.value)}
                    value={password}
                />
            </div>
            <div className="button-group d-flex flex-column mx-auto pt-50">
                <button
                    className="btn btn-sign-up fw-medium text-lg text-white rounded-pill mb-16"
                    type="button"
                    onClick={() => onSubmit()}
                >Continue</button>

                <a className="btn btn-sign-in fw-medium text-lg color-palette-1 rounded-pill" href="/sign-in"
                    role="button">Sign
                    In</a>
            </div>
        </>
    )
}
