'use client'

import './cadastro.css'

import Image from 'next/image'

import img from '@/public/imagem-cadastro-page.svg'

export default function Cadastro() {
    return (
        <main className="h-screen w-full flex items-center justify-center px-6 md:px-28 lg:px-48">
            <div className='w-full flex flex-col items-center gap-6 border border-gray-900 rounded-2xl py-2 px-6'>
                <h1 className='font-bold text-4xl'>CADASTRO</h1>
                <div className='w-full flex flex-col md:flex-row gap-2'>
                    <div className="containers hidden md:flex">
                        <Image src={img} priority alt='imagem estatisticas'/>
                    </div>

                    <form className="containers flex flex-col justify-center gap-8">
                        <div className='inputs'>
                            <label htmlFor='usuario'>Nome Completo:</label>
                            <input id='usuario' placeholder='Ex: Nona Bale' type='text' />
                        </div>

                        <div className='inputs'>
                            <label htmlFor='usuario'>Nome do Usuário:</label>
                            <input id='usuario' placeholder='Ex: NonaPrega123' type='text' />
                        </div>

                        <div className='inputs'>
                            <label htmlFor='usuario'>Email:</label>
                            <input id='usuario' placeholder='nonabale123@email.com' type='email' />
                        </div>

                        <div className='inputs'>
                            <label htmlFor='senha'>Senha:</label>
                            <input id='senha' placeholder='Senha com mais de 6 dígitos' type='password' />
                        </div>

                        <div className='flex items-center justify-center'>
                            <input className='border border-gray-900 rounded-full py-1 px-4 cursor-pointer 
                            hover:bg-slate-900 hover:text-gray-100 transition duration-300' type='submit' value='Entrar' />
                        </div>
                    </form>
                </div>
            </div>

        </main>
    )
}