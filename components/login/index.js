'use client'

import './login.css'

import Link from 'next/link'

import Image from 'next/image'
import img from '@/public/imagem-login-page.svg'

import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '@/context/auth'

export default function Login() {

    const {Login, Cadastro} = useContext(AuthContext)

    const [user, setUser] = useState({
        email: '',
        senha: ''
    })

    function HandleChange(e) {
        const {name, value} = e.target
        setUser((prev) => {
            return {...prev, [name]: value}
        })
    }

    function HandleSubmit(e) {
        e.preventDefault()
        console.log(user)
        Login(user.email, user.senha)
    }

    return (
        <main className="h-screen w-full flex items-center justify-center px-6 md:px-28 lg:px-48">
            <div className='w-full flex flex-col items-center gap-6 border border-gray-900 rounded-2xl py-2 px-6'>
                <h1 className='font-bold text-4xl'>LOGIN</h1>
                <div className='w-full flex flex-col md:flex-row gap-2'>
                    <div className="containers hidden md:flex">
                        <Image src={img} priority alt='imagem estatisticas' />
                    </div>

                    <form onSubmit={HandleSubmit} autoComplete='off' className="containers flex flex-col justify-center gap-8">
                        <div className='inputs'>
                            <label htmlFor='usuario'>Email:</label>
                            <input required onChange={HandleChange} id='usuario' name='email' placeholder='Email Cadastrado' type='email' />
                        </div>

                        <div className='inputs'>
                            <label htmlFor='senha'>Senha:</label>
                            <input required onChange={HandleChange} id='senha' name='senha' placeholder='Senha' type='password' />
                        </div>

                        <div className='flex items-center justify-center'>
                            <input className='border border-gray-900 rounded-full py-1 px-4 cursor-pointer 
                            hover:bg-slate-900 hover:text-gray-100 transition duration-300' type='submit' value='Entrar' />
                        </div>
                        <Link href='/cadastro' className='underline self-center text-blue-950'>Criar conta</Link>
                    </form>
                </div>
            </div>

        </main>
    )
}