import GuardarTreino from "@/components/guardarTreino";
import Header from "@/components/header";

export const metadata = {
    title: "Guardar Treino"
}

export default function GuardarTreinoPage() {
    return (
        <>
            <Header tela='guardarTreino' />
            <GuardarTreino />
        </>
    )
}