'use client'

import { useState, useEffect, useContext, createContext } from 'react'

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {

    const merda = 'cocozinho'

    return (
        <AuthContext.Provider value={merda}>
            {children}
        </AuthContext.Provider>
    )
}