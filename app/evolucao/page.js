import Evolucao from "@/components/evolucao";
import Header from "@/components/header";

export const metadata = {
    title: 'Evolução'
}

export default function EvolucaoPage() {
    return (
        <>
            <Header tela='evolucao' />
            <Evolucao />
        </>
    )
}