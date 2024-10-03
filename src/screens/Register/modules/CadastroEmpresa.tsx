// import { useState } from 'react'
import imagemLaranja from '../../../assets/background/Illustration-orange.png'
// import { InputMask } from 'primereact/inputmask';

export function CadastroEmpresa({ cargo } : { cargo : string }) {
    // const [parte, setParte] = useState(1);
    // const [value, setValue] = useState('');
    // setValue('')
    return (
        <main className="w-full h-screen flex items-center justify-center">
            <section id="backgroundAzul" className={`${cargo == "empresa" ? "flex" : "hidden"} h-screen w-1/2 flex-col gap-4 items-center justify-center text-white`}>
                <img src={imagemLaranja} alt="" />
                <div className='uppercase font-bold text-center text-3xl'>
                    <h1>Faça o cadastro</h1>
                    <h1>da sua empresa</h1>
                </div>
            </section>

            
        </main>
    )
}