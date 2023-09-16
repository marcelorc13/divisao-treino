'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import { CgGym } from 'react-icons/cg'
import { IoIosBasketball } from 'react-icons/io'
import { MdOutlineDirectionsRun } from 'react-icons/md'
import { MdDirectionsBike } from 'react-icons/md'
import { FaSwimmer } from 'react-icons/fa'
import { RiBoxingFill } from 'react-icons/ri'
import { userAgent } from 'next/server'


export default function Divisao() {

    const router = useRouter()

    function HandleRelocate() {
        const detalhes = {
            valor1: '1',
            valor2: '2',
        }

        router.push({
            pathname: '/treino',
            query: detalhes,
        })

    }

    return (
        <main className="flex flex-col items-center">
            <div className='flex flex-row items-center justify-center gap-8 py-10 text-4xl font-semibold'>
                <h1>Divisão de Treino</h1>
                <h2>Equipe Roca</h2>
            </div>


            {/* Usar rotas Dinâmicas */}
            <ul className='flex flex-col list-disc text-2xl'>
                <li>
                    <p onClick={HandleRelocate}>Segunda-Feira</p>
                </li>

                <li>
                    <Link href={'/treino'}>Terça-Feira</Link>
                </li>

                <li>
                    <Link href={'/treino'}>Quarta-Feira</Link>
                </li>

                <li>
                    <Link href={'/treino'}>Quinta-Feira</Link>
                </li>

                <li>
                    <Link href={'/treino'}>Sexta-Feira</Link>
                </li>

                <li>
                    <Link href={'/treino'}>Sábado</Link>
                </li>

                <li>
                    <Link href={'/treino'}>Domingo</Link>
                </li>
            </ul>
        </main>
    )
}