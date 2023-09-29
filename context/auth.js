'use client'

import { useState, useEffect, useContext, createContext } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/app/firebaseconnection'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/app/firebaseconnection'

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {

    const auth = getAuth()

    const Login = async (email, senha) => {
        await signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                console.log('Logado')
                console.log(userCredential)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const Cadastro = async (info) => {
        await createUserWithEmailAndPassword(auth, info.email, info.senha)
            .then((userCredential) => {
                console.log('Cadastrado')
                console.log(info)
                console.log(userCredential.user.uid)

                setDoc(doc(db, 'users', userCredential.user.uid), {
                    nomeCompleto: info.nomeCompleto,
                    nomeUsuario: info.nomeUsuario,
                    email: info.email,
                    senha: info.senha
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }



    return (
        <AuthContext.Provider value={{ Cadastro, Login }}>
            {children}
        </AuthContext.Provider>
    )
}