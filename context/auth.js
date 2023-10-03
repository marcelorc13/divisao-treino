'use client'

import { useState, useEffect, useContext, createContext } from 'react'

import { useRouter } from 'next/navigation'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/app/firebaseconnection'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/app/firebaseconnection'

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {

    const router = useRouter()

    const auth = getAuth()
    //https://console.firebase.google.com/u/0/project/projeto-equipe-roca/authentication/users?hl=pt-br



    const [logado, setLogado] = useState(false)

    const [usuario, setUsuario] = useState({})

    const Login = async (email, senha) => {
        await signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                setUsuario(userCredential.user.email)
                console.log(usuario)
                setLogado(true)

                localStorage.setItem('EstaLogado', logado)
                localStorage.setItem('UsuarioLogado', JSON.stringify(usuario)) 
            })
            .catch((error) => {
                console.log(error)
            })

        if (logado == true) {
            router.push('/')
        }

    }


    const Cadastro = async (info) => {
        let cadastrado = false

        await createUserWithEmailAndPassword(auth, info.email, info.senha)
            .then((userCredential) => {
                cadastrado = true
                console.log(`Cadastrado = ${cadastrado}`)
                console.log(userCredential)

                //https://console.firebase.google.com/u/0/project/projeto-equipe-roca/firestore/data/~2Fusers~2F4GS0npNWsfZZq92DEfIBK12Yt8Q2?hl=pt-br
                setDoc(doc(db, 'users', userCredential.user.uid), {
                    nomeCompleto: info.nomeCompleto,
                    nomeUsuario: info.nomeUsuario,
                    email: info.email,
                    senha: info.senha
                })
            })
            .catch((error) => {
                cadastrado = false
                console.log(`Cadastrado = ${cadastrado}`)

                console.log(error)
            })

        if (cadastrado == true) {
            router.push('/login')
        }
    }


    return (
        <AuthContext.Provider value={{ Cadastro, Login, usuario }}>
            {children}
        </AuthContext.Provider>
    )
}