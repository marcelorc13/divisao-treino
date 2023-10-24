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

    const [usuario, setUsuario] = useState()

    const Login = async (email, senha) => {
        await signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                if (typeof window !== 'undefined') {
                    localStorage.setItem('EstaLogado', true)
                    localStorage.setItem('UsuarioLogado', (userCredential.user.email))
                    localStorage.setItem('UidLogado', (userCredential.user.uid))

                    const estouLogado = localStorage.getItem('EstaLogado')
                    if (estouLogado == 'true') {
                        router.push('/')
                    }
                }
            })
            .catch((error) => {
                alert('Usuário ou Senha incorreto!')
                console.log(error)
            })

    }


    const Cadastro = async (info) => {
        let cadastrado = false

        await createUserWithEmailAndPassword(auth, info.email, info.senha)
            .then((userCredential) => {
                cadastrado = true

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
                console.log(error)
            })

        if (cadastrado == true) {
            router.push('/login')
        }
    }

    const Logout = () => {
        if (typeof window !== 'undefined') {
            setLogado(false)
            console.log(logado)

            localStorage.setItem('EstaLogado', logado)
            setUsuario()
            localStorage.setItem('UsuarioLogado', '')
            localStorage.setItem('UidLogado', '')

            ChecarLogin()
        }
    }


    const ChecarLogin = () => {
        if (typeof window !== 'undefined') {
            const EstaLogado = localStorage.getItem('EstaLogado')
            const Usuario = localStorage.getItem('UsuarioLogado')


            if (EstaLogado === 'true') {
                //console.log('Eu estou logado')
                //console.log(`Email do usuário: ${JSON.parse(Usuario)}`)
            }
            else {
                console.log('Não estou logado')
                router.push('/login')
            }
        }
    }


    return (
        <AuthContext.Provider value={{ Cadastro, Login, usuario, Logout, ChecarLogin }}>
            {children}
        </AuthContext.Provider>
    )
}