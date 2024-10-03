import imagemAzul from '../../../assets/background/Illustration-blue.png'

export function CadastroEstudante({ cargo }: {cargo: string | undefined}) {
    return (
        <main className="w-full h-screen flex items-center justify-center">
            <section id='backgroundLaranja' className={`${cargo == 'estudante' ? "flex" : "hidden"} h-screen w-1/2 flex-col gap-4 items-center justify-center`}>
                <img src={imagemAzul} alt="" />
                <div className='uppercase font-bold text-center text-3xl'>
                    <h1>Faça o cadastro</h1>
                    <h1 className='bg-gradient-to-b to-blue-500 from-black text-transparent bg-clip-text'>de estudante</h1>
                </div>
            </section>

            <section className={`${cargo == 'estudante' ? "" : "hidden"} h-screen w-1/2 flex items-center justify-center`}>
                oi
            </section>
        </main>
    )
}