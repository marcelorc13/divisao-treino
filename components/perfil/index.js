'use client'

import './perfil.css'

import { useEffect, useState } from "react"
import { collection, getDoc, getDocs, doc, query } from "firebase/firestore"
import { db } from "@/app/firebaseconnection"

export default function Perfil() {
    const [uid, setUid] = useState()

    const [infos, setInfos] = useState({})

    const [pesos, setPesos] = useState([{}])

    useEffect(() => {
        const userId = JSON.parse(localStorage.getItem('UidLogado'))
        setUid(userId)

        const ReceberDados = async () => { 
            const docSnapDados = await getDoc(doc(db, 'users', userId))

            const infosUser = docSnapDados.data()
            setInfos(infosUser)
        }

        const ReceberEvolucao = async () => {
            const q = query(collection(db, 'users', userId, 'pesos'))
            const querySnapshot = await getDocs(q)

            querySnapshot.forEach((doc) => {
                setPesos(doc.data())
                console.log(doc.data())
            })
        }

        ReceberDados()
        ReceberEvolucao() 
    }, [])

    //console.log(pesos)
    //console.log(infos)

    return (
        <main className='w-full flex flex-col gap-12 pt-12'>
            <div id='infosPerfil' className="flex flex-col items-center justify-center">
                <h1>{infos.nomeCompleto}</h1>
                <h2>{infos.nomeUsuario}</h2>
                <h3>{infos.email}</h3>
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className='self-center text-xl font-semibold mb-2'>Meus Treinos:</h1>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8'>
                    <div className='cardTreinos'>
                        <h1>Em breve...</h1>
                    </div>

                    <div className='cardTreinos'>
                        <h1>Em breve...</h1>
                    </div>

                    <div className='cardTreinos'>
                        <h1>Em breve...</h1>
                    </div>

                    <div className='cardTreinos'>
                        <h1>Em breve...</h1>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className='self-center text-xl font-semibold mb-2'>Minha Evolução:</h1>
                <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-8'>
                    <div className='cardTreinos'>
                        <h1>{JSON.stringify(pesos)}</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}