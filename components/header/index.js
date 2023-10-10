'use client'

import './header.css'

import { BiLogOut } from 'react-icons/bi'

import { useContext } from 'react'
import { AuthContext } from '@/context/auth'

export default function Header() {

    const { Cadastro, Login, usuario, Logout } = useContext(AuthContext)


    if (typeof window !== "undefined") {
        const Usuario = localStorage.getItem('UsuarioLogado')

        return (
            <nav className="flex flex-row items-center justify-between px-20 border border-gray-900 py-4 text-xl">
                <div>
                    <h1>Equipe Roca</h1>
                </div>

                <div>
                    <ul className="flex flex-row gap-4">
                        <li>Treino de Hoje</li>
                        <li>Guardar Treino</li>
                    </ul>
                </div>

                <div className='flex gap-2 items-center'>
                    <p className='text-sm'>Logado em: <span className='text-base'>{JSON.parse(Usuario)}</span></p>
                    <button onClick={Logout}><BiLogOut /></button>
                </div>

            </nav>
        )
    }


}