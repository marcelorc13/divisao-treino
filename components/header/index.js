'use client'

import './header.css'

export default function Header() {


    if (typeof window !== "undefined") {
        const Usuario = localStorage.getItem('UsuarioLogado')

        return (
            <header className="flex flex-row items-center justify-between px-20 border border-gray-900 py-4 text-xl">
                <div>
                    <h1>Equipe Roca</h1>
                </div>

                <div>
                    <ul className="flex flex-row gap-4">
                        <li>Treino de Hoje</li>
                        <li>Guardar Treino</li>
                    </ul>
                </div>

                <div>
                    <p className='text-sm'>Logado em: <span className='text-base'>{JSON.parse(Usuario)}</span></p>
                </div>

            </header>
        )
    }


}