'use client'

import './cadastro.css'

import Link from 'next/link'

import Image from 'next/image'
import img from '@/public/imagem-cadastro-page.svg'

import { useState, useContext } from 'react'
import { AuthContext } from '@/context/auth.js'


export default function Cadastro() {

    const {Login, Cadastro, logado} = useContext(AuthContext)

    const [info, setInfo] = useState({
        nomeCompleto: '',
        nomeUsuario: '',
        email: '',
        senha: '',
    })

    function HandleChange(e){
        const {name, value} = e.target
        setInfo((prev) => {
            return {...prev, [name] : value}
        })
    }

    function HandleSubmit(e) {
        e.preventDefault()
        Cadastro(info)
    }

    return (
        <main className="h-screen w-full flex items-center justify-center px-6 md:px-28 lg:px-48">
            <div className='w-full flex flex-col items-center gap-6 border border-gray-900 rounded-2xl py-2 px-6'>
                <h1 className='font-bold text-4xl'>CADASTRO</h1>
                <div className='w-full flex flex-col md:flex-row gap-2'>
                    <div className="containers hidden md:flex">
                        <Image src={img} priority alt='imagem estatisticas' />
                    </div>

                    <form onSubmit={HandleSubmit} className="containers flex flex-col justify-center gap-8">
                        <div className='inputs'>
                            <label htmlFor='nomeCompleto'>Nome Completo:</label>
                            <input required onChange={HandleChange} id='nomeCompleto' name='nomeCompleto' placeholder='Ex: Nona Bayat' type='text' />
                        </div>

                        <div className='inputs'>
                            <label htmlFor='nomeUsuario'>Nome do Usuário:</label>
                            <input required onChange={HandleChange} id='nomeUsuario' name='nomeUsuario' placeholder='Ex: NonaPrega123' type='text' />
                        </div>

                        <div className='inputs'>
                            <label htmlFor='email'>Email:</label>
                            <input required onChange={HandleChange} id='email' name='email' placeholder='nonabayat123@exemplo.com' type='email' />
                        </div>

                        <div className='inputs'>
                            <label htmlFor='senha'>Senha:</label>
                            <input required onChange={HandleChange} id='senha' name='senha' placeholder='Senha com mais de 6 dígitos' type='password' />
                        </div>

                        <div className='flex items-center justify-center'>
                            <input id='btnSubmit' className='border border-gray-900 rounded-full py-1 px-4 cursor-pointer 
                            hover:bg-slate-900 hover:text-gray-100 transition duration-300' type='submit' value='Cadastrar-se' />
                        </div>
                        <Link href='/login' className='underline self-center text-blue-950'>Já tenho uma conta</Link>
                    </form>
                </div>
            </div>

        </main>
    )
}