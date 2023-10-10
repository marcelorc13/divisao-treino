'use client'

import './header.css'

import { BiLogOut } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'

import { useContext } from 'react'
import { AuthContext } from '@/context/auth'

export default function Header() {

    const { Cadastro, Login, usuario, Logout } = useContext(AuthContext)

    const abrirMenu = () => {
        const items = document.querySelector('#navItems')
        const lista = document.querySelector('#navLista')
        const btn = document.querySelector('#btnLogout')

        console.log(items, lista, btn.innerHTML)

        // items.classList.toggle('hidden')
        // items.classList.toggle('justify-between')
        // items.classList.toggle('justify-center')
        // items.classList.toggle('text-center')
        // items.classList.toggle('flex-col')

        // lista.classList.toggle('gap-0')
        // lista.classList.toggle('flex-row')
        // lista.classList.toggle('flex-col')
        // console.log(items)
    }

    return (
        <nav className="pt-8 md:px-20 md:py-8">
            <div className='flex text-center justify-center md:hidden'>
                <button className='text-2xl' onClick={abrirMenu}><GiHamburgerMenu/></button>
            </div>
            <div id='navItems' className='hidden md:flex md:flex-row items-center justify-between md:text-lg lg:text-xl'>
                <div>
                    <h1 className='md:text-2xl lg:text-4xl font-semibold'>Equipe Roca</h1>
                </div>

                <div>
                    <ul id='navLista' className="flex flex-row justify-center gap-4">
                        <li>Treino de Hoje</li>
                        <li>Guardar Treino</li>
                    </ul>
                </div>

                <div className='flex gap-2 items-center justify-center'>
                    <button id='btnLogout' onClick={Logout}><BiLogOut /></button>
                </div>
            </div>
        </nav>
    )


}