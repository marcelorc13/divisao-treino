'use client'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect } from 'react'
import { useState } from 'react'

import Descanso from '../treinos/descanso'
import TreinoPernaCompleto from '../treinos/treinoSegunda'
import TreinoPeitoBiceps from '../treinos/treinoTerca'
import TreinoCostasOmbro from '../treinos/treinoQuarta'
import TreinoPanturrilha from '../treinos/treinoQuinta'
import TreinoBicepsTriceps from '../treinos/treinoSexta'
import TreinoPeitoOmbro from '../treinos/treinoSábado'

export default function TreinoBody() {

    useEffect(() => {
        MostrarTreino();
    })

    function MostrarTreino() {
        if (musculos == 'Descanso') {
            const treino = <Descanso />
            setExercicios(treino)
        }
        else if (musculos == 'Perna Completa') {
            const treino = <TreinoPernaCompleto />
            setExercicios(treino)
        }
        else if (musculos == 'Peito & Bíceps (Panturrilha)') {
            const treino = <TreinoPeitoBiceps />
            setExercicios(treino)
        }
        else if (musculos == 'Costas & Ombro') {
            const treino = <TreinoCostasOmbro />
            setExercicios(treino)
        }
        else if (musculos == 'Descanso (Panturrilha)') {
            const treino = <TreinoPanturrilha />
            setExercicios(treino)
        }
        else if (musculos == 'Bíceps & Tríceps') {
            const treino = <TreinoBicepsTriceps />
            setExercicios(treino)
        }
        else if (musculos == 'Peito & Ombro (Panturrilha)') {
            const treino = <TreinoPeitoOmbro />
            setExercicios(treino)
        }
    }

    const searchParams = useSearchParams()

    const dia = searchParams.get('dia')
    const musculos = searchParams.get('musculos')

    const [exercicios, setExercicios] = useState('')


    return (
        <main className='flex flex-col items-center'>
            <h1 className='text-xl md:text-2xl text-center font-semibold'>{dia}</h1>
            <h1 className='text-3xl md:text-4xl text-center font-bold'>{musculos}</h1>
            <section className='w-full'>{exercicios}</section>
        </main>
    )
}
