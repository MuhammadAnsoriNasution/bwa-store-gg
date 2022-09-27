import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { setSignUp } from '../services/auth'
import { CategoryTypes } from '../services/data-types'
import { getGameCategory } from '../services/player'

export default function SignUpPhoto() {
    const [categories, setCategories] = useState<CategoryTypes[]>([])
    const [favorite, setFavorite] = useState('')
    const [image, setimage] = useState<any>('')
    const [imagePreview, setimagePreview] = useState('/')
    const [userForm, setUserForm] = useState<{ name: string, email: string, password: string }>({
        name: '',
        email: '',
        password: ''
    })
    const router = useRouter()
    const getGameCategoryApi = useCallback(async () => {
        const data = await getGameCategory()
        setCategories(data.data)
        setFavorite(data.data[0]._id)
    }, [getGameCategory])

    useEffect(() => {
        getGameCategoryApi()
    }, [])
    useEffect(() => {
        const localForm = localStorage.getItem('user-form')
        const form = JSON.parse(localForm!)
        setUserForm(form)
    }, [])
    const onSubmit = async (e: any) => {
        e.preventDefault();
        const form = userForm
        const data = new FormData()
        data.append('image', image)
        data.append('email', form.email)
        data.append('name', form.name)
        data.append('password', form.password)
        data.append('username', form.name)
        data.append('phoneNumber', '08123456789')
        data.append('role', 'user')
        data.append('status', 'Y')
        data.append('favorite', favorite)
        const result = await setSignUp(data);
        if (result.error) {
            toast.error(result.message)
        } else {
            toast.success(result.message)
            localStorage.removeItem('user-form')
            router.push('/sign-up-success')

        }

    }
    return (

        <section className="sign-up-photo mx-auto pt-lg-227 pb-lg-227 pt-130 pb-50">
            <div className="container mx-auto">
                <form>
                    <div className="form-input d-md-block d-flex flex-column">
                        <div>
                            <div className="mb-20">
                                <div className="image-upload text-center">
                                    <label htmlFor="avatar">
                                        {
                                            imagePreview === '/' ? <img src={imagePreview} className="img-upload " /> : <Image width={120} height={120} src="/icon/upload.svg" />
                                        }

                                    </label>
                                    <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" onChange={(e) => {
                                        const hasil = e.target.files![0];
                                        setimagePreview(URL.createObjectURL(hasil))
                                        setimage(hasil)
                                    }} />
                                </div>
                            </div>
                            <h2 className="fw-bold text-xl text-center color-palette-1 m-0">{userForm.name}</h2>
                            <p className="text-lg text-center color-palette-1 m-0">{userForm.email}</p>
                            <div className="pt-50 pb-50">
                                <label className="form-label text-lg fw-medium color-palette-1 mb-10">Favorite
                                    Game</label>
                                <select id="category"
                                    value={favorite}
                                    onChange={(e) => setFavorite(e.target.value)}
                                    name="category" className="form-select d-block w-100 rounded-pill text-lg"
                                    aria-label="Favorite Game">
                                    {
                                        categories.map((category) => {
                                            return <option key={category.name} value={category._id} selected>{category.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="button-group d-flex flex-column mx-auto">
                            <button
                                type='button'
                                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                                // href="/sign-up-photo-success"
                                onClick={onSubmit}
                            >Create My Account</button>
                            <a className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15" href="#"
                                role="button">Terms &
                                Conditions</a>
                        </div>
                    </div>
                </form>
            </div>

        </section>

    )
}
