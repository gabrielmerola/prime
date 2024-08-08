import 'primereact/resources/themes/saga-blue/theme.css';
import mulher from '../../../assets/mulherFaleConosco.png';

import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { Button } from '../../../components/button/button';

import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'
export function Contato() {
    return (
        <>
        <Header page="contato"/>
        <main>
            <section className="bg-prime-blue text-white flex justify-center">
                <h2 className="w-4/6 font-bold text-2xl uppercase p-8 max-md:w-full">fale conosco</h2>
            </section>

            <section className='flex justify-center m-12 max-md:flex-col'>
                <img className='h-[600px] max-md:h-auto' src={mulher} alt="Foto de uma mulher" />
                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col items-start gap-2'>
                        <h5 className='text-prime-blue font-bold text-2xl max-md:text-center'>Para se Cadastrar nas Vagas</h5>
                        <Button href="/login">clique aqui para fazer seu cadastro</Button>
                    </div>
                    <div className='flex flex-col items-start gap-2'>
                        <h5 className='text-prime-blue font-bold text-2xl'>Envie-nos uma mensagem</h5>
                        <p className='text-gray-400'>Preencha o formulário abaixo e responderemos assim que possível.</p>
                    </div>

                    <form className='flex flex-col gap-4'>
                        <div>
                            <label htmlFor="">Nome <span className='text-red-500'>*</span></label>
                            <div className="p-inputgroup flex-1">
                                <InputText className='border-2 rounded p-2' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Email <span className='text-red-500'>*</span></label>
                            <div className="p-inputgroup flex-1">
                                <InputText className='border-2 rounded p-2' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Telefone <span className='text-red-500'>*</span></label>
                            <div className="p-inputgroup flex-1">
                                <InputText className='border-2 rounded p-2' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Assunto <span className='text-red-500'>*</span></label>
                            <div className="p-inputgroup flex-1">
                                <InputText className='border-2 rounded p-2' />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="">Especifique o suporte que necessita: <span className='text-red-500'>*</span></label>
                            <div className="p-inputgroup flex-1">
                                <InputTextarea rows={8} className='border-2 rounded p-2' />
                            </div>
                        </div>

                        <button className='bg-prime-blue text-white font-bold p-2 rounded duration-300 hover:bg-blue-700' type='button'>Enviar</button>
                    </form>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}