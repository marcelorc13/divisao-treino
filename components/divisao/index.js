'use client'

import './divisao.css'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { useEffect, useContext } from 'react'

import { AuthContext } from '@/context/auth'

import { CgGym } from 'react-icons/cg'
import { IoIosBasketball } from 'react-icons/io'
import { MdOutlineDirectionsRun } from 'react-icons/md'
import { MdDirectionsBike } from 'react-icons/md'
import { FaSwimmer } from 'react-icons/fa'
import { RiBoxingFill } from 'react-icons/ri'
import { userAgent } from 'next/server'

export default function Divisao() {

    const { Cadastro, Login, usuario, Logout, ChecarLogin } = useContext(AuthContext)

    const router = useRouter()
    useEffect(() => {
        ChecarLogin()
        verDia()
    }, [ChecarLogin])


    function verDia() {
        const dataHoje = new Date()
        const diaHoje = dataHoje.getDay()

        const dias = document.querySelectorAll('.dias')
        
        dias[diaHoje].classList.add('destacado')
    }

    return (
        <main className="flex flex-col items-center pb-10">
            <div className='flex flex-col items-center justify-center gap-1 py-10 text-xl md:text-5xl font-semibold'>
                <h1>Divisão de Treino</h1>
                <h2>Equipe Roca</h2>
            </div>

            <ul id='dias' className='flex flex-col gap-6'>

                <li className='dias'>
                    <Link href={{
                        pathname: '/domingo',
                    }}>
                        Domingo: Descanso
                    </Link>
                </li>

                <li className='dias'>
                    <Link href={{
                        pathname: '/treino',
                        query: {
                            tag: 0,
                        }
                    }}>
                        Segunda-Feira : Perna Completa
                    </Link>
                </li>

                <li className='dias'>
                    <Link href={{
                        pathname: '/treino',
                        query: {
                            tag: 1,
                        }
                    }}>
                        Terça-Feira : Peito & Bíceps (Panturrilha)
                    </Link>
                </li>
                <li className='dias'>
                    <Link href={{
                        pathname: '/treino',
                        query: {
                            tag: 2,
                        }
                    }}>
                        Quarta-Feira : Costas & Ombro
                    </Link>
                </li>
                <li className='dias'>
                    <Link href={{
                        pathname: '/treino',
                        query: {
                            tag: 3,
                        }
                    }}>
                        Quinta-Feira : Descanso (Panturrilha)
                    </Link>
                </li>
                <li className='dias'>
                    <Link href={{
                        pathname: '/treino',
                        query: {
                            tag: 4,
                        }
                    }}>
                        Sexta-Feira : Bíceps & Tríceps
                    </Link>
                </li>
                <li className='dias'>
                    <Link href={{
                        pathname: '/treino',
                        query: {
                            tag: 5,
                        }
                    }}>
                        Sábado : Ombro & Peito (Panturrilha)
                    </Link>
                </li>
            </ul>
        </main >
    )
}