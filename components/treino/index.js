'use client'

import './treinos.css'

import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect } from 'react'
import { useState } from 'react'

import Treinos from '@/treinos/treinos'

export default function TreinoBody() {

    useEffect(() => {
        MostrarTreino();
    })

    const searchParams = useSearchParams()

    const dia = searchParams.get('dia')
    const id = searchParams.get('id')

    const treino = JSON.stringify(Treinos.treinos[id].treino)

    const exercicios = Treinos.treinos[id].exercicios
    const exerciciosKey = Object.keys(exercicios)

    function MostrarTreino() {
        console.log(exercicios)
        console.log(exerciciosKey)
    }


    return (
        <main className='flex flex-col items-center'>
            <h1 className='text-xl md:text-2xl text-center font-semibold'>{dia}</h1>
            <h1 className='text-3xl md:text-4xl text-center font-bold'>{JSON.parse(treino)}</h1>
            <div id='lista-exercicios'>
                <ul className='w-full'>
                    {exerciciosKey.map((key) => {
                        return (
                            <li key={key}>
                                {exercicios[key].exercicio}
                                <p>{exercicios[key].series} Séries</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </main>
    )
}
