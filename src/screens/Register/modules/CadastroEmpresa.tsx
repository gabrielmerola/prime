import { useState } from 'react'
import imagemLaranja from '../../../assets/background/Illustration-orange.png'
import { InputMask } from 'primereact/inputmask';

export function CadastroEmpresa({ cargo } : { cargo : string | undefined }) {
    const [parte, setParte] = useState(1);
    const [value, setValue] = useState('');

    return (
        <main className="w-full h-screen flex items-center justify-center">
            <section id="backgroundAzul" className={`${cargo == 'empresa' ? "" : "hidden"} h-screen w-1/2 flex flex-col gap-4 items-center justify-center text-white`}>
                <img src={imagemLaranja} alt="" />
                <div className='uppercase font-bold text-center text-3xl'>
                    <h1>Faça o cadastro</h1>
                    <h1>da sua empresa</h1>
                </div>
            </section>

            <section className={`${cargo == 'empresa' ? "" : "hidden"} h-screen w-1/2 flex flex-col gap-4 items-center justify-center p-16`}>
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
                {parte == 1 ?
                    <div className='w-1/2'>
                        <form className='mb-4 flex flex-col gap-8' action="">
                            <div className='flex flex-col'>
                                <label htmlFor="">CNPJ:</label>
                                <InputMask className='border-b-2 border-gray-300 p-2 pb-0' value={value} onChange={() => {}} mask="99.999.999/9999-99" />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="">Nome Fantasia:</label>
                                <input className='border-b-2 border-gray-300 p-2 pb-0' type="text" />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="">Razão Social:</label>
                                <input className='border-b-2 border-gray-300 p-2 pb-0' type="text" />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor="">Número de Funcionários:</label>
                                <input className='border-b-2 border-gray-300 p-2 pb-0' type="number" />
                            </div>
                        </form>
                        <div className='flex justify-center'>
                            <button className='bg-gradient-to-b to-70% from-black to-prime-blue text-white px-8 py-4 rounded-full font-bold' onClick={()=>setParte(2)}>próximo</button>
                        </div>
                    </div>
                    : parte == 2 ?
                    <div className='w-3/4'>
                        <form className='mb-4 flex flex-col gap-8' action="">
                            {/* 1 parte */}
                            <div className='flex gap-8'>
                                <div className='w-full flex flex-col'>
                                    <label htmlFor="">Email da empresa:</label>
                                    <input className='border-b-2 border-gray-300 p-2 pb-0' type="email" />
                                </div>
                                <div className='w-full flex flex-col'>
                                    <label htmlFor="">Telefone:</label>
                                    <InputMask className='border-b-2 border-gray-300 p-2 pb-0' value={value} onChange={() => {}} mask="(99) 99999-9999" />
                                </div>
                            </div>
                            {/* 2 parte */}
                            <div className='flex gap-8'>
                                <div className='w-1/4 flex flex-col'>
                                    <label htmlFor="">CEP:</label>
                                    <InputMask className='border-b-2 border-gray-300 p-2 pb-0' value={value} onChange={() => {}} mask="99999-999" />
                                </div>
                                <div className='w-3/4 flex flex-col'>
                                    <label htmlFor="">Endereço:</label>
                                    <input className='border-b-2 border-gray-300 p-2 pb-0' type="text" />
                                </div>
                            </div>
                            {/* 3 parte */}
                            <div className='flex gap-8'>
                                <div className='w-1/5 flex flex-col'>
                                    <label htmlFor="">Número:</label>
                                    <input className='border-b-2 border-gray-300 p-2 pb-0' type="number" />
                                </div>
                                <div className='w-3/5 flex flex-col'>
                                    <label htmlFor="">Complemento:</label>
                                    <input className='border-b-2 border-gray-300 p-2 pb-0' type="text" />
                                </div>
                                <div className='w-1/5 flex flex-col'>
                                    <label htmlFor="">Bairro:</label>
                                    <input className='border-b-2 border-gray-300 p-2 pb-0' type="text" />
                                </div>
                            </div>
                            {/* 4 parte */}
                            <div className='flex gap-8'>
                                <div className='w-full flex flex-col'>
                                    <label htmlFor="">Cidade:</label>
                                    <input className='border-b-2 border-gray-300 p-2 pb-0' type="text" />
                                </div>
                                <div className='w-full flex flex-col'>
                                    <label htmlFor="">Estado:</label>
                                    <input className='border-b-2 border-gray-300 p-2 pb-0' type="text" />
                                </div>
                            </div>
                        </form>
                        <div className='flex items-center justify-center gap-2'>
                            <button className='bg-white border-2 border-prime-blue px-8 py-4 rounded-full font-bold' onClick={()=>setParte(1)}>voltar</button>
                            <button className='bg-gradient-to-b to-70% from-black to-prime-blue text-white px-8 py-4 rounded-full font-bold' onClick={()=>setParte(3)}>próximo</button>
                        </div>
                    </div>
                    :
                    <div className='w-3/4'>
                        <p className='text-center text-prime-blue mb-4'>Precisamos cadastrar um representante para essa empresa. Por favor, informe os seguintes dados:</p>
                        <form className='mb-4 flex flex-col gap-8' action="">
                            <div className='w-full flex flex-col'>
                                <label htmlFor="">Nome civil:</label>
                                <input className='border-b-2 border-gray-300 p-2 pb-0' type="text" />
                            </div>
                            {/* 1 parte */}
                            <div className='flex items-end gap-8'>
                                <div className='w-1/4 flex flex-col'>
                                    <label htmlFor="">Data de Nascimento:</label>
                                    <InputMask className='border-b-2 border-gray-300 p-2 pb-0' value={value} onChange={() => {}} mask="99/99/9999" />
                                </div>
                                <div className='w-2/4 flex flex-col'>
                                    <label htmlFor="">CPF:</label>
                                    <InputMask className='border-b-2 border-gray-300 p-2 pb-0' value={value} onChange={() => {}} mask="999.999.999-99" />
                                </div>
                                <div className='w-1/4 flex flex-col'>
                                    <label htmlFor="">Código do Conselho:</label>
                                    <input className='border-b-2 border-gray-300 p-2 pb-0' type="text" />
                                </div>
                            </div>
                            <div className='w-full flex flex-col'>
                                <label htmlFor="">Email de Acesso:</label>
                                <input className='border-b-2 border-gray-300 p-2 pb-0' type="email" />
                            </div>
                            {/* 2 parte */}
                            <div className='flex gap-8'>
                                <div className='w-1/2 flex flex-col'>
                                    <label htmlFor="">Senha de Acesso:</label>
                                    <input className='border-b-2 border-gray-300 p-2 pb-0' type="password" />
                                </div>
                                <div className='w-1/2 flex flex-col'>
                                    <label htmlFor="">Confirmação de senha:</label>
                                    <input className='border-b-2 border-gray-300 p-2 pb-0' type="password" />
                                </div>
                            </div>
                        </form>
                        <div className='flex items-center justify-center gap-2'>
                            <button className='bg-white border-2 border-prime-blue px-8 py-4 rounded-full font-bold' onClick={()=>setParte(2)}>voltar</button>
                            <button className='bg-gradient-to-b to-70% from-black to-prime-blue text-white px-8 py-4 rounded-full font-bold' onClick={()=>{}}>finalizar</button>
                        </div>
                    </div>
                }
            </section>
        </main>
    )
}