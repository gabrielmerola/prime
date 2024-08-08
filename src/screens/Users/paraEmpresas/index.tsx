import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import fundoEmpresas from '../../../assets/fundoParaEmpresas.jpg'
import topico1 from '../../../assets/topicosEmpresa.png'
import topico2 from '../../../assets/topicosEmpresa2.png'
import topico3 from '../../../assets/topicosEmpresa3.png'
import pc from '../../../assets/pc1.jpg';

export function ParaEmpresas() {
    return (
        <>
        <Header page="para-empresas"/>
        <main>
            <section className="w-full h-72 overflow-hidden relative">
                <img className="w-full h-full object-cover object-center" src={fundoEmpresas} alt="Banner" />
                <div className="absolute z-[5] inset-y-10 flex justify-center items-center">
                    <img className="w-52 max-md:w-32" src={topico1} alt="topicos empresa" />
                    <img className="w-52 max-md:w-32" src={topico2} alt="topicos empresa" />
                    <img className="w-52 max-md:w-32" src={topico3} alt="topicos empresa" />
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
        </main>
        <Footer />
        </>
    )
}