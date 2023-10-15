'use client'

import './evolucao.css'

import { useState, useEffect, useContext } from "react"

import { setDoc, doc } from "firebase/firestore"
import { db } from "@/app/firebaseconnection"

export default function Evolucao() {

    const [uid, setUid] = useState()
    const [datas, setDatas] = useState({})

    const HandleChange = (e) => {
        const { name, value } = e.target
        setDatas((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const HandleSubmit = (e) => {
        e.preventDefault()
        setDoc(doc(db, 'users', uid, 'pesos', datas.data), {
            peso: datas,
        })
            .then(() => {
                console.log('Peso Enviado')
                alert('Peso Enviado com Sucesso')
            })
            .catch((error) => {
                console.log('Erro no envio')
                alert('Erro ao enviar o peso')
                console.log(error)
            })
    }

    useEffect(() => {
        setUid(JSON.parse(localStorage.getItem('UidLogado')))
    }, [])

    return (
        <main className="mt-6">
            <form className="flex flex-col gap-2 px-16 md:px-28 lg:px-40" onSubmit={HandleSubmit}>
                <div className='divInputs'>
                    <label htmlFor='data'>Data:</label>
                    <input required className='inputsValores' onChange={HandleChange} type="date" id='data' name="data" />
                </div>

                <div className='divInputs'>
                    <label htmlFor='hora'>Hora:</label>
                    <input required className='inputsValores' onChange={HandleChange} type="time" id='hora' name="hora" />
                </div>

                <div className='divInputs'>
                    <label htmlFor='peso'>Peso:</label>
                    <input required className='inputsValores peso' onChange={HandleChange} type="text" id='peso' name="peso" placeholder="00.0" maxLength={5} />
                </div>

                <div className='divInputs btn'>
                    <input className='inputSubmit border border-gray-900 rounded-full py-1 px-4 font-semibold cursor-pointer hover:bg-slate-900 hover:text-gray-100 transition duration-300' type="submit" value='Enviar' />
                </div>
            </form>
        </main>
    )
}