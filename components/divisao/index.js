'use client'

import Link from 'next/link'

import { CgGym } from 'react-icons/cg'
import { IoIosBasketball } from 'react-icons/io'
import { MdOutlineDirectionsRun } from 'react-icons/md'
import { MdDirectionsBike } from 'react-icons/md'
import { FaSwimmer } from 'react-icons/fa'
import { RiBoxingFill } from 'react-icons/ri'
import { userAgent } from 'next/server'
import Segunda from '../treinos/segunda'


export default function Divisao() {

    return (
        <main className="flex flex-col items-center">
            <div className='flex flex-row items-center justify-center gap-8 py-10 text-4xl font-semibold'>
                <h1>Divisão de Treino</h1>
                <h2>Equipe Roca</h2>
            </div>


            {/* Usar rotas Dinâmicas */}
            <ul className='flex flex-col list-disc text-2xl'>
                <li>
                    <Link href={{
                        pathname: '/treino',
                        query: {
                            dia: 'Segunda-Feira',
                            musculos: 'Perna Completa',
                        }
                    }}>Segunda-Feira : Perna Completa</Link>
                </li>

                <li>
                    <Link href={{
                        pathname: '/treino',
                        query: {
                            dia: 'Terça-Feira',
                            musculos: 'Peito & Bíceps / Panturrilha',
                        }
                    }}>Terça-Feira : Peito & Bíceps / Panturrilha</Link>
                </li>
                <li>
                    <Link href={{
                        pathname: '/treino',
                        query: {
                            dia: 'Quarta-Feira',
                            musculos: 'Costas & Ombro',
                        }
                    }}>Quarta-Feira : Costas & Ombro</Link>
                </li>
                <li>
                    <Link href={{
                        pathname: '/treino',
                        query: {
                            dia: 'Quinta-Feira',
                            musculos: 'Descanso / Panturrilha',
                        }
                    }}>Quinta-Feira : Descanso / Panturrilha</Link>
                </li>
                <li>
                    <Link href={{
                        pathname: '/treino',
                        query: {
                            dia: 'Sexta-Feira',
                            musculos: 'Bíceps & Tríceps',
                        }
                    }}>Sexta-Feira : Bíceps & Tríceps</Link>
                </li>
                <li>
                    <Link href={{
                        pathname: '/treino',
                        query: {
                            dia: 'Sábado',
                            musculos: 'Peito & Ombro / Panturrilha',
                        }
                    }}>Sábado : Peito & Ombro / Panturrilha</Link>
                </li>
                <li>
                    <Link href={{
                        pathname: '/treino',
                        query: {
                            dia: 'Domingo',
                            musculos: 'Descanso',
                        }
                    }}>Domingo : Descanso</Link>
                </li>

            </ul>
        </main >
    )
}