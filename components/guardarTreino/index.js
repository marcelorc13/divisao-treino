'use client'

import './guardaTreino.css'
import { useContext, useEffect, useState } from 'react'

import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/app/firebaseconnection'

export default function GuardarTreino() {

    const [uid, setUid] = useState()

    const [treino, setTreino] = useState({})
    const [data, setData] = useState()

    const HandleTexto = (e) => {
        const { name, value } = e.target
        setTreino((prev) => {
            return { ...prev, [name]: value }
        })
    }
    const HandleData = (e) => {
        setData(e.target.value)
    }

    const EnviarTreino = (e) => {
        e.preventDefault()

        console.log(data)
        console.log(treino)


        setDoc(doc(db, 'users', uid, 'treinos', data), {
            treino: treino,
        })
            .then(() => {
                console.log('Treino Enviado')
            })
            .catch((error) => {
                console.log('Treino com problema')
                console.log(error)
            })
    }

    useEffect(() => {
        setUid((localStorage.getItem('UidLogado')))
    }, [])

    return (
        <main className='mt-4'>
            <form onSubmit={EnviarTreino} className='flex flex-col gap-2 items-center justify-center'>
                <input required onChange={HandleData} type='date' />
                <select required onChange={HandleTexto} name='TreinoTitulo'>
                    <option hidden>Selecione o Treino</option>
                    <option value='Perna Completa'>Perna Completa</option>
                    <option value='Peito & Bíceps (Panturrilha)'>Peito & Bíceps (Panturrilha)</option>
                    <option value='Costas & Ombro'>Costas & Ombro</option>
                    <option value='Descanso (Panturrilha)'>Descanso (Panturrilha)</option>
                    <option value='Bíceps & Tríceps'>Bíceps & Tríceps</option>
                    <option value='Ombro & Peito (Panturrilha)'>Ombro & Peito (Panturrilha)</option>
                </select>
                <input type='submit' value='Enviar' />
            </form>
        </main>
    )
}