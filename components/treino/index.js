'use client'

import './treinos.css'

import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useContext, useState } from 'react'

import { AuthContext } from '@/context/auth'

import { BiArrowBack } from 'react-icons/bi'

import DataTreinos from '@/treinos/treinos.json'

import Treinos from '@/treinos/treinos.js'
import Link from 'next/link'

export default function TreinoBody() {

    const { Cadastro, Login, usuario, Logout, ChecarLogin } = useContext(AuthContext)

    useEffect(() => {
        ChecarLogin()
    }, [ChecarLogin])

    const searchParams = useSearchParams()

    const tag = searchParams.get('tag')

    const treino = DataTreinos.treinos[tag]
    //console.log(treino)



    return (
        <main className='flex flex-col items-center relative'>
            <div className='text-2xl md:text-3xl absolute left-4 top-4 md:left-12 lg:left-24' >
                <Link href='/'><BiArrowBack className='hover:-translate-x-2 transition duration-300' /></Link>
            </div>
            <h1 className='text-xl md:text-2xl text-center font-semibold'>{treino.dia}</h1>
            <h1 className='text-3xl md:text-4xl text-center font-bold'>{treino.titulo}</h1>
            <div id='lista-exercicios'>
                <ul className='w-full'>
                    {treino.exercicios.map((ex, key) => {
                        let serie = ''
                        if (ex.series == 1) {
                            serie = 'Série'
                        }
                        else {
                            serie = 'Séries'
                        }

                        return (
                            <li key={key}>
                                {ex.exercicio}
                                <p>{ex.series} {serie}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </main>
    )
}
