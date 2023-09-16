'use client'

import { useRouter } from "next/navigation"

export default function TreinoBody() {

    const router = useRouter()
    const { teste } = router.query

    return (
        <main>
            <p>{teste}</p>
        </main>
    )
}
