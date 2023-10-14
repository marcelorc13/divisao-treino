'use client'

import './guardaTreino.css'
import { useContext, useEffect, useState } from 'react'

import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/app/firebaseconnection'

export default function GuardarTreino() {

    const [uid, setUid] = useState()

    const [treinos, setTreinos] = useState({
        texto01: '',
        texto02: '',
    })
    const [data, setData] = useState()

    const HandleTexto = (e) => {
        const { name, value } = e.target
        setTreinos((prev) => {
            return { ...prev, [name]: value }
        })
    }
    const HandleData = (e) => {
        setData(e.target.value)
    }

    const EnviarTreino = (e) => {
        e.preventDefault()

        console.log(data)
        console.log(treinos)


        setDoc(doc(db, 'users', uid, 'treinos', data), {
            treino: treinos,
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
        setUid(JSON.parse(localStorage.getItem('UidLogado')))
    }, [])

    return (
        <main>
            <form onSubmit={EnviarTreino} className='flex flex-col gap-2 items-center justify-center'>
                <input onChange={HandleData} type='date' />
                {/* <input onChange={HandleTexto} name='texto01' type='text' /> */}
                <input type='submit' value='Enviar' />
            </form>
        </main>
    )
}