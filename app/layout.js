import './globals.css'

import AuthProvider from '@/context/auth'

export const metadata = {
  title: {
    default: 'Divisão de Treino | Equipe Roca',
    template: '%s | Equipe Roca'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
