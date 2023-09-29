'use client'

import { useState, useEffect, useContext, createContext } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/app/firebaseconnection'

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {

    const auth = getAuth()

    function Cadastro(email, senha) {
        createUserWithEmailAndPassword(auth, email, senha)
            .then((userCredential) => {
                console.log('Cadastrado')
                console.log(userCredential)
            })
            .catch((error) => {
                console.log(error)
            })
    }



    const teste = 'testando...'

    return (
        <AuthContext.Provider value={Cadastro}>
            {children}
        </AuthContext.Provider>
    )
}