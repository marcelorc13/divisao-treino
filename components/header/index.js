'use client'

import './header.css'

import { BiLogOut } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { BiLoaderCircle } from 'react-icons/bi'

import Link from 'next/link'

import { useContext, useEffect } from 'react'
import { AuthContext } from '@/context/auth'

export default function Header(props) {

    const { Cadastro, Login, usuario, Logout, ChecarLogin } = useContext(AuthContext)

    useEffect(() => {
        ChecarLogin()
    }, [ChecarLogin])

    const abrirMenu = () => {
        const items = document.querySelector('#navItems')
        const lista = document.querySelector('#navLista')
        const btn = document.querySelector('#btnAbrir')

        if (btn.value == 'abrir') {
            items.classList.remove('hidden')
            items.classList.add('mt-6')

            btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>`

            btn.value = 'fechar'
        }
        else if (btn.value == 'fechar') {
            items.classList.add('hidden')
            items.classList.remove('mt-6')

            btn.innerHTML = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>`

            btn.value = 'abrir'
        }
    }

    useEffect(() => {
        const btnDivisao = document.querySelector('#btnDivisao')
        const btnPerfil = document.querySelector('#btnPerfil')
        const btnGuardar = document.querySelector('#btnGuardar')
        const btnEvolucao = document.querySelector('#btnEvolucao')

        if (props.tela === 'divisao') {
            btnDivisao.classList.add('border-2')
            btnDivisao.classList.add('border-gray-900')
        }
        else if (props.tela === 'perfil') {
            btnPerfil.classList.add('border-2')
            btnPerfil.classList.add('border-gray-900')
        }
        else if (props.tela === 'guardarTreino') {
            btnGuardar.classList.add('border-2')
            btnGuardar.classList.add('border-gray-900')
        }
        else if (props.tela === 'evolucao') {
            btnEvolucao.classList.add('border-2')
            btnEvolucao.classList.add('border-gray-900')
        }

    }, [])


    return (
        <nav className="mt-8 md:px-16 lg:px-24 md:py-8">
            <div className='flex text-center justify-center md:hidden'>
                <button id='btnAbrir' className='text-2xl' value='abrir' onClick={abrirMenu}><GiHamburgerMenu /></button>
            </div>

            <div id='navItems' className='hidden md:flex md:flex-row justify-between items-center md:text-lg lg:text-xl font-semibold'>
                <div className='text-center md:py-0'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Equipe Roca</h1>
                </div>

                <div>
                    <ul id='navLista' className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4 py-4 md:py-0">
                        <Link href='/'><li id='btnDivisao'>Divisão</li></Link>
                        <Link href='/perfil'><li id='btnPerfil'>Perfil</li></Link>
                        <Link href='evolucao'><li id='btnEvolucao'>Evolução</li></Link>
                        <Link href='/guardar-treino'><li id='btnGuardar' className='desenvolvendo'>Guardar Treino<BiLoaderCircle /></li></Link>
                    </ul>
                </div>

                <div id='logoutDiv' className='flex flex-row items-center justify-center'>
                    <label htmlFor='btnLogout' className='flex flex-row items-center justify-center cursor-pointer md:hidden'>Logout:</label>
                    <button id='btnLogout' onClick={Logout}><BiLogOut /></button>
                </div>
            </div>
        </nav>
    )


}