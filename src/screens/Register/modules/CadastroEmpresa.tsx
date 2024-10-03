import { useState } from 'react'
import imagemLaranja from '../../../assets/background/Illustration-orange.png'
// import { InputMask } from 'primereact/inputmask';

export function CadastroEmpresa({ cargo } : { cargo : string }) {
    const [parte, setParte] = useState(1);
    // const [value, setValue] = useState('');
    // setValue('')
    setParte(1)
    return (
        <main className="w-full h-screen flex items-center justify-center">
            <section id="backgroundAzul" className={`${cargo == "empresa" ? "flex" : "hidden"} h-screen w-1/2 flex-col gap-4 items-center justify-center text-white`}>
                <img src={imagemLaranja} alt="" />
                <div className='uppercase font-bold text-center text-3xl'>
                    <h1>Faça o cadastro</h1>
                    <h1>da sua empresa</h1>
                </div>
            </section>

            <section className={`${cargo == 'empresa' ? "flex" : "hidden"} h-screen w-1/2 flex-col gap-4 items-center justify-center p-16`}>
                <h1 className='text-3xl text-prime-blue font-bold'>cadastro de Empresa</h1>
                <div className='flex items-center justify-between w-full relative'>
                    <div className='absolute top-0 w-full h-full flex items-center justify-center'>
                        <div className='w-full h-[2px] bg-black' />
                    </div>
                    <div className={`${parte >= 1 ? 'bg-gradient-to-b to-70% from-black to-prime-blue text-white' : 'bg-gray-300'} border-2 border-prime-blue z-10 h-12 w-12 rounded-full flex items-center justify-center`}>
                        <span className='font-bold'>1</span>
                    </div>
                    <div className={`${parte >= 2 ? 'bg-gradient-to-b to-70% from-black to-prime-blue text-white' : 'bg-gray-300'} border-2 border-prime-blue z-10 h-12 w-12 rounded-full flex items-center justify-center`}>
                        <span className='font-bold'>2</span>
                    </div>
                    <div className={`${parte >= 3 ? 'bg-gradient-to-b to-70% from-black to-prime-blue text-white' : 'bg-gray-300'} border-2 border-prime-blue z-10 h-12 w-12 rounded-full flex items-center justify-center`}>
                        <span className='font-bold'>3</span>
                    </div>
                </div>
            </section>
        </main>
    )
}