import pc from '../../../assets/pc1.jpg';
import predio from '../../../assets/predios.png';
import adminPc from '../../../assets/adminPc.png';
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";

export function Prime() {
    return (
        <>
        <Header page="prime"/>
        <main>
            <section className="w-full h-72 overflow-hidden">
                <img className="w-full h-full object-cover object-center" src={predio} alt="Banner" />
            </section>

            <section className="flex justify-center p-12 border-b-2 mb-4">
                <div className="w-2/3 flex items-center gap-8 justify-between max-lg:flex-col">
                    <img className="w-64 rounded-full" src={pc} alt="Imagem de um notebook" />
                    
                    <div className="flex flex-col gap-4">
                        <h2 className="text-2xl border-b-2 border-prime-orange pb-2 text-prime-blue">Conheça o jeito PRIME de administrar seus <span className="font-bold">estágios.</span></h2>
                        <p className="text-gray-400">A Prime Estágios nasceu do desejo de prestar um Serviço personalizado aos seus clientes parceiros, Conciliando preço acessível e qualidade.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-gray-400">Formada por profissionais com mais de duas décadas de experiência na administração dos programas de estágio.</p>
                        <p className="text-gray-400">A Prime é forjada por valores éticos e profissionais, que auxiliarão a sua empresa com essas aquisições.</p>
                    </div>
                </div>
            </section>

            <section className="flex justify-center items-center p-12 border-b-2 mb-4 max-lg:flex-col-reverse">
                <div className='w-1/3 flex flex-col gap-4 max-lg:w-full'>
                    <h2 className='text-2xl border-b-2 border-prime-orange pb-2 text-prime-blue'>Sistema Gerenciador Próprio</h2>
                    <p className='text-gray-400'>Tenha o controle a poucos cliques com o sistema exclusivo da Prime. Um conjunto de ferramentas para auxiliar a gestão e encaminhamento de candidatos.</p>
                    <div className='mt-4'>
                        <a className='bg-prime-orange uppercase text-white p-4 font-bold' href="/contato">Entre em contato</a>
                    </div>
                </div>
                <img className='w-[30%] max-md:w-full' src={adminPc} alt="Imagem de um notebook" />
            </section>

            <section className='flex flex-wrap gap-12 py-12 justify-center items-center max-md:flex-col'>
                <div className='flex flex-col items-center gap-2'>
                    <i className="fa-solid fa-circle-user text-3xl text-blue-500"></i>
                    <label>Divulgar Vaga</label>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <i className="fa-solid fa-laptop text-3xl text-blue-500"></i>
                    <label>Controle de Usuários</label>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <i className="fa-solid fa-file text-3xl text-blue-500"></i>
                    <label>Gerenciador de documentos</label>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <i className="fa-solid fa-cloud text-3xl text-blue-500"></i>
                    <label>Acessibilidade na Nuvem</label>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <i className="fa-solid fa-address-card text-3xl text-blue-500"></i>
                    <label>Avisos de Incompatibilidades</label>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <i className="fa-solid fa-address-book text-3xl text-blue-500"></i>
                    <label>Controle de Horário</label>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}