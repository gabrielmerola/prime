import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";

import paraEmpresasCard from '../../../assets/para-empresas-card.png'
import fundoEmpresas from '../../../assets/fundoParaEmpresas.jpg'
import topico1 from '../../../assets/topicosEmpresa.png'
import topico2 from '../../../assets/topicosEmpresa2.png'
import topico3 from '../../../assets/topicosEmpresa3.png'
import icone1 from '../../../assets/iconesEmpresas/iconeEmpresas1.png'
import icone2 from '../../../assets/iconesEmpresas/iconeEmpresas2.png'
import icone3 from '../../../assets/iconesEmpresas/iconeEmpresas3.png'
import icone4 from '../../../assets/iconesEmpresas/iconeEmpresas4.png'
import icone5 from '../../../assets/iconesEmpresas/iconeEmpresas5.png'
import icone6 from '../../../assets/iconesEmpresas/iconeEmpresas6.png'
import icone7 from '../../../assets/iconesEmpresas/iconeEmpresas7.png'
import icone8 from '../../../assets/iconesEmpresas/iconeEmpresas8.png'
import pc from '../../../assets/pc1.jpg';

export function ParaEmpresas() {
    return (
        <>
        <Header page="para-empresas"/>
        <main>
            <section className="w-full h-72 overflow-hidden relative">
                <img className="w-full h-full object-cover object-center" src={fundoEmpresas} alt="Banner" />
                <div className="absolute z-[5] inset-y-10 flex justify-center items-center">
                    <img className="w-40 max-md:w-24" src={topico1} alt="topicos empresa" />
                    <img className="w-40 max-md:w-24" src={topico2} alt="topicos empresa" />
                    <img className="w-40 max-md:w-24" src={topico3} alt="topicos empresa" />
                </div>
            </section>

            <section className="flex justify-center p-12 border-b-2 mb-4">
                <div className="w-2/3 flex flex-row-reverse items-center gap-8 justify-between max-lg:flex-col">
                    <img className="w-64 rounded-full" src={pc} alt="Imagem de um notebook" />
                    
                    <div className="flex items-center gap-4 max-md:flex-col">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-2xl border-b-2 border-prime-orange pb-2 text-prime-blue">Para as Empresas</h2>
                            <p className="text-gray-400">Estamos aqui para simplificar o seu processo de busca, seleção e contratação de talento por meio do Estágio.</p>
                            <p className="text-gray-400">Conte com o nosso suporte e de forma personalizada.</p>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="text-gray-400">Para cada Cliente , um ponto focal de atendimento o qual estará sempre a disposição para tratar dos assuntos relacionados a sua conta estágio.</p>
                            <p className="text-gray-400">Afinal, Aqui você empresa é Prime.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-100">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col items-center md:flex-row sm:items-start">
                    <div className="w-full md:w-1/2 flex flex-col items-center">
                        <div className="relative w-[70%] sm:h-auto">
                            <img
                                src={paraEmpresasCard} 
                                alt="Vantagens"
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute top-0 bg-opacity-60 w-full h-full flex flex-col justify-end items-center text-center text-white p-4">
                                <h2 className="text-4xl max-md:text-2xl max-lg:text-3xl font-bold w-full tracking-widest">VANTAGENS</h2>
                                <h2 className="text-3xl max-md:text-1xl max-lg:text-2xl font-bold w-full tracking-widest">EM SER CLIENTE</h2>
                                <h2 className="text-6xl max-md:text-4xl max-lg:text-5xl font-bold w-full border-b-4 border-white tracking-widest">PRIME</h2>
                            </div>
                        </div>
                    </div>
                    <div className="text-gray-500 w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:mt-0 sm:pl-8">
                        <div className="flex flex-col items-center text-center p-4">
                            <img src={icone1} alt="icone" />
                            <p>Facilidade e agilidade na abertura de vagas de estágio</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <img src={icone2} alt="icone" />
                            <p>Controle antecipado dos vencimentos de seus contratos</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <img src={icone3} alt="icone" />
                            <p>Suporte nos recibos de pagamentos aos seus estagiários.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <img src={icone4} alt="icone" />
                            <p>Triagem de candidatos próximos da sua região.</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <img src={icone5} alt="icone" />
                            <p>Rapidez e regularização: Contratos enviados Via Digital</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <img src={icone6} alt="icone" />
                            <p>Seguro Especial de acidentes pessoais <strong>Porto Seguro</strong></p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <img src={icone7} alt="icone" />
                            <p>Facilidade de prorrogações e antecipações de contratos</p>
                        </div>
                        <div className="flex flex-col items-center text-center p-4">
                            <img src={icone8} alt="icone" />
                            <p>Atendimento personalizado</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}