import imagemLaranja from '../../../assets/background/Illustration-orange.png'

export function CadastroEmpresa({ cargo } : { cargo : string | undefined }) {
    return (
        <main className="w-full h-screen flex items-center justify-center">
            <section id="backgroundAzul" className={`${cargo == 'empresa' ? "" : "hidden"} h-screen w-1/2 flex flex-col gap-4 items-center justify-center text-white`}>
                <img src={imagemLaranja} alt="" />
                <div className='uppercase font-bold text-center text-3xl'>
                    <h1>Faça o cadastro</h1>
                    <h1>da sua empresa</h1>
                </div>
            </section>

            <section className={`${cargo == 'empresa' ? "" : "hidden"} h-screen w-1/2 flex items-center justify-center`}>
                oi
            </section>
        </main>
    )
}