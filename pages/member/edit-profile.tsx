import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Input from '../../components/atoms/input';
import Sidebar from '../../components/organisms/Sidebar';
import { JwtPayloadTypes } from '../../services/data-types';
import { updateProfile } from '../../services/member';
import { API_IMG } from '../../utils/api';

interface UserTypes {
    avatar: any,
    email: string,
    id: string,
    name: string,
    username: string
}

export default function EditProfile() {
    const [user, setUser] = useState<UserTypes>({
        avatar: '',
        email: '',
        id: '',
        name: '',
        username: ''
    })
    const [imagePreview, setimagePreview] = useState('/')

    useEffect(() => {
        const token = Cookies.get('token')
        if (token) {
            const jwtToken = window.atob(token!);
            const payload: JwtPayloadTypes = jwtDecode(jwtToken)
            const userFromPayload: UserTypes = payload.player
            userFromPayload.avatar = `${API_IMG}/${userFromPayload.avatar}`
            setUser(userFromPayload)
        }
    }, [])
    const router = useRouter()
    const onSubmit = async () => {
        const data = new FormData();
        data.append('image', user.avatar);
        data.append('name', user.name);
        const response = await updateProfile(data, user.id)
        if (response.error) {
            toast.error(response.message)
        } else {
            toast.success(response.message)
            router.push('/sign-in')
        }
    }
    return (
        <section className="edit-profile overflow-auto">
            <Sidebar activeMenu='settings' />
            <main className="main-wrapper">
                <div className="ps-lg-0">
                    <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
                    <div className="bg-card pt-30 ps-30 pe-30 pb-30">
                        <form action="">
                            <div className="photo d-flex">
                                <div className="image-upload">
                                    <label htmlFor="avatar">
                                        {
                                            imagePreview === "/" ?
                                                <img src={imagePreview} alt='icon-upload' width="90" height="90" style={{ borderRadius: '100%' }} />
                                                :
                                                <img src={user.avatar} alt='icon-upload' width="90" height="90" style={{ borderRadius: '100%' }} />
                                        }
                                    </label>
                                    <input
                                        id="avatar"
                                        type="file" name="avatar"
                                        accept="image/png, image/jpeg"
                                        onChange={(e) => {
                                            const image = e.target.files![0]
                                            setimagePreview(URL.createObjectURL(image))
                                            setUser(p => ({
                                                ...p,
                                                avatar: image
                                            }))
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="pt-30">
                                <Input label='Full Name' value={user.name} onChange={(e: any) => setUser(p => ({ ...p, name: e.target.value }))} />
                            </div>
                            <div className="pt-30">
                                <Input label='Email Address' disabled value={user.email} />
                            </div>
                            {/* <div className="pt-30">
                                <Input label='Phone' />
                            </div> */}
                            <div className="button-group d-flex flex-column pt-50">
                                <button type='button'
                                    className="btn btn-save fw-medium text-lg text-white rounded-pill"
                                    onClick={onSubmit}
                                    role="button">Save My Profile</button>
                            </div>
                        </form>

                    </div>


                </div>
            </main>
        </section>
    );
}
