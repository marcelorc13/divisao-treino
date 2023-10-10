'use client'

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

    console.log(infos)

    return (
        <main>
            <p>{infos.nomeUsuario}</p>
            <p>{infos.nomeCompleto}</p>
            <p>{infos.email}</p>
        </main>
    )
}