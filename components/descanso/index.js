'use client'

export default function Descanso() {

    function HandleFelicidade() {
        alert('OBRIGADO CAIO')
        const video = 'https://www.youtube.com/@sam_sulek'
        window.location.href= video
    }

    function HandleTristeza() {
        const randomY = (Math.random() * 100).toFixed(0)
        const randomX = (Math.random() * 100).toFixed(0)

        const btn = document.querySelector('#btnNao')

        btn.classList.add('absolute')
        btn.style.left = randomX + '%';
        btn.style.top = randomY + '%';
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full gap-4 relative">
            <h1 className="text-4xl md:text-5xl text-center">Caio vai descansar hoje?</h1>
            <div className="flex gap-4">
                <button className="border bg-gray-900 rounded-full text-white text-xl font-bold px-6 py-1" onClick={HandleFelicidade}>Sim</button>
                <button className="border bg-gray-900 rounded-full text-white text-xl font-bold px-6 py-1" id="btnNao" onMouseOver={HandleTristeza}>Não</button>
            </div>

        </div>
    )
}