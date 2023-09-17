'use client'

import { useSearchParams } from 'next/navigation'

export default function TreinoBody(props) {

    const searchParams = useSearchParams()

    const dia = searchParams.get('dia')
    const musculos = searchParams.get('musculos')
    const exercicios = searchParams.get('exercicios')

    return (
        <main className='flex flex-col items-center'>
            <h1 className='text-4xl'>{dia} - {musculos}</h1>
            <div>{exercicios}</div>
        </main>
    )
}
