'use client'

import { useState, useEffect, useContext, createContext } from 'react'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/app/firebaseconnection'

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {

    const auth = getAuth()

    const Login = (email, senha) => {
        signInWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                console.log('Logado')
                console.log(userCredential)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const Cadastro = (email, senha) => {
        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                console.log('Cadastrado')
                console.log(userCredential)
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