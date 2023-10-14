'use client'

import './perfil.css'

import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/app/firebaseconnection"

export default function Perfil() {
    const [uid, setUid] = useState('')

    const [infos, setInfos] = useState({})

    useEffect(() => {
        setUid(JSON.parse(localStorage.getItem('UidLogado')))

        const ReceberDados = async () => {
            const docRef = doc(db, 'users', JSON.parse(localStorage.getItem('UidLogado')))
            const docSnap = await getDoc(docRef)

            const infosUser = docSnap.data()
            setInfos(infosUser)
        }

        ReceberDados()
    }, [])

    //console.log(infos)

    return (
        <main className='w-full flex flex-col gap-12 pt-12'>
            <div id='infosPerfil' className="flex flex-col items-center justify-center">
                <h1>{infos.nomeUsuario}</h1>
                <h2>{infos.nomeCompleto}</h2>
                <h3>{infos.email}</h3>
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className='self-center text-xl font-semibold mb-2'>Meus Treinos:</h1>
                <div className='grid gap-4 grid-cols-1 px-8'>
                    {/* <div className='cardTreinos'>
                        <h1>Data 01/01/23</h1>
                    </div>

                    <div className='cardTreinos'>
                        <h1>Data 02/01/23</h1>
                    </div>

                    <div className='cardTreinos'>
                        <h1>Data 03/01/23</h1>
                    </div>

                    <div className='cardTreinos'>
                        <h1>Data 04/01/23</h1>
                    </div> */}
                </div>
            </div>
        </main>
    )
}