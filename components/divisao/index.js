'use client'

import './divisao.css'

import Link from 'next/link'
import { useEffect } from 'react'

import { CgGym } from 'react-icons/cg'
import { IoIosBasketball } from 'react-icons/io'
import { MdOutlineDirectionsRun } from 'react-icons/md'
import { MdDirectionsBike } from 'react-icons/md'
import { FaSwimmer } from 'react-icons/fa'
import { RiBoxingFill } from 'react-icons/ri'
import { userAgent } from 'next/server'

export default function Divisao() {

    useEffect(() => {
        verDia()
    })

    function verDia() {
        const dataHoje = new Date()
        const diaHoje = dataHoje.getDay()

        const dias = document.querySelectorAll('.dias')

        dias[diaHoje].classList.remove('dias')
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
                        pathname: '/treino',
                        query: {
                            dia: 'Domingo',
                            musculos: 'Descanso',
                        }
                    }}>
                        Domingo : Descanso
                    </Link>
                </li>

                <li className='dias'>
                    <Link href={{
                        pathname: '/treino',
                        query: {
                            dia: 'Segunda-Feira',
                            musculos: 'Perna Completa',
                        }
                    }}>
                        Segunda-Feira : Perna Completa
                    </Link>
                </li>

                <li className='dias'>
                    <Link href={{
                        pathname: '/treino',
                        query: {
                            dia: 'Terça-Feira',
                            musculos: 'Peito & Bíceps / Panturrilha',
                        }
                    }}>
                        Terça-Feira : Peito & Bíceps / Panturrilha
                    </Link>
                </li>
                <li className='dias'>
                    <Link href={{
                        pathname: '/treino',
                        query: {
                            dia: 'Quarta-Feira',
                            musculos: 'Costas & Ombro',
                        }
                    }}>
                        Quarta-Feira : Costas & Ombro
                    </Link>
                </li>
                <li className='dias'>
                    <Link href={{
                        pathname: '/treino',
                        query: {
                            dia: 'Quinta-Feira',
                            musculos: 'Descanso / Panturrilha',
                        }
                    }}>
                        Quinta-Feira : Descanso / Panturrilha
                    </Link>
                </li>
                <li className='dias'>
                    <Link href={{
                        pathname: '/treino',
                        query: {
                            dia: 'Sexta-Feira',
                            musculos: 'Bíceps & Tríceps',
                        }
                    }}>
                        Sexta-Feira : Bíceps & Tríceps
                    </Link>
                </li>
                <li className='dias'>
                    <Link href={{
                        pathname: '/treino',
                        query: {
                            dia: 'Sábado',
                            musculos: 'Peito & Ombro / Panturrilha',
                        }
                    }}>
                        Sábado : Peito & Ombro / Panturrilha
                    </Link>
                </li>
            </ul>
        </main >
    )
}