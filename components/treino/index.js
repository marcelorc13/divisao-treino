'use client'
import TreinoPernaCompleto from '../treinos/treinoSegunda'

import { useSearchParams } from 'next/navigation'
import { useEffect } from 'react'
import { useState } from 'react'

export default function TreinoBody() {

    useEffect(() => {
        MostrarParams();
    }, [''])


    function MostrarParams() {
        if (musculos == 'Perna Completa') {
            const teste = <TreinoPernaCompleto />
            setExercicios(teste)
        }
    }

    const searchParams = useSearchParams()

    const dia = searchParams.get('dia')
    const musculos = searchParams.get('musculos')

    const [exercicios, setExercicios] = useState('')


    return (
        <main className='flex flex-col items-center'>
            <h1 className='text-2xl md:text-4xl text-center font-bold'>{dia} - {musculos}</h1>
            <section className='w-full'>{exercicios}</section>
        </main>
    )
}
