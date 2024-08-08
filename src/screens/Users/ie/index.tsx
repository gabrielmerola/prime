import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import grupoAlunos from '../../../assets/grupoAlunos.png';
import garota from '../../../assets/garota.jpg';
import alunos from '../../../assets/alunosEscada.png';
import zaul from '../../../assets/zaul.jpg';
import { Link } from "react-router-dom";

export function Ie() {
    return (
        <>
        <Header page="ie"/>
        <main>
            <section className="w-full h-72 overflow-hidden relative">
                <img className="w-full h-full object-cover object-center" src={grupoAlunos} alt="Imagem do banner" />
            </section>

            <section className="my-8 flex justify-center">
                <div className="flex items-center gap-8 w-4/6 max-md:flex-col">
                    <div className="w-2/3 max-md:w-full">
                        <div className="flex items-center justify-center gap-4 text-gray-400 mt-4 max-md:flex-col">
                            <h3 className="text-prime-blue text-2xl border-b-2 border-prime-orange pb-2 w-1/2 max-md:w-full">A instituição de ensino é uma das nossas parceiras nessa relação de formação profissional dos estudantes através dos programas de estágio.</h3>
                            <div className="w-1/2 max-md:w-full">
                                <p>A contratação de estagiários é um processo composto por três partes fundamentais: a instituição de ensino, a empresa e o estudante.</p>
                                <p>A Lei 11.788/08 contempla a participação do Agente de Integração.</p>
                                <p>Nós, da Prime, desejamos ser parceiros estratégicos para as instituições de ensino e aos seus alunos, que poderão contar com os nossos serviços de forma gratuita.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-4 w-1/3 max-md:w-full">
                        <img className="rounded-full" src={garota} alt="Imagem de um estudante" />
                    </div>
                </div>
            </section>

            <section className="flex justify-center bg-gray-100">
                <div className="w-2/3 max-md:w-full my-4">
                    <div className="flex items-center justify-center gap-8 text-gray-400 mt-4 p-4 max-md:flex-col">
                        <h3 className="text-prime-blue text-2xl border-b-2 border-prime-orange pb-2 w-1/3 max-md:w-full">Conte com nossas ferramentas</h3>
                        <div className="w-1/3 max-md:w-full">
                            <p>A sua Instituição poderá contar com as nossas ferramentas administrativas de sistema para enriquecer o gerenciamento dos estágios curriculares obrigatórios e não obrigatórios.</p>
                            <p>Um dos nossos pilares é o compromisso com a legalidade do estágio.</p>
                        </div>
                        <div className="w-1/3 max-md:w-full">
                            <p>E esse compromisso começa desde a abertura da vaga até a pós contratação, proporcionando maior segurança jurídica para as partes envolvidas.</p>
                            <p>Conte com a nossa assessoria personalizada e gratuita. Agradecemos pela oportunidade.</p>
                            <p>Relacionamento com as Instituições de Ensino. Prime Estágios: Aqui, Você é Prime!</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="flex justify-center">
                <div className="w-2/3 max-md:w-full my-4">
                    <div className="flex items-center justify-center gap-8 text-gray-400 mt-4 max-md:flex-col max-md:items-center">
                        <div className="flex flex-col items-center gap-4 w-1/3 max-md:w-3/4">
                            <div className="card w-full h-48 max-md:h-40">
                                <div className="front w-full h-full relative">
                                    <img className="w-full h-full object-cover rounded-lg" src={zaul} alt="Front Image" />
                                    <div className="absolute top-0 w-full h-full flex items-center justify-center text-3xl">
                                        <h2 className="font-bold text-center uppercase text-prime-orange">Cadastre sua inscrição</h2>
                                    </div>
                                </div>
                                <div className="back w-full h-full bg-gray-200">
                                    <div className="flex flex-col items-center justify-center w-full text-center gap-2">
                                        <h3 className="text-prime-blue font-bold text-xl">É Grátis</h3>
                                        <p className="flex flex-wrap">Se você for coordenador de estágio ou responsável pela área, cadastre a sua instituição</p>
                                        <Link className="bg-prime-orange p-2 rounded text-white font-semibold" to="/login">Clique aqui!</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/3 max-md:w-3/4 max-md:mt-4">
                            <p>Para iniciarmos essa parceria, a Instituição de ensino precisa fornecer algumas informações básicas através do nosso site.</p>
                            <p>Após essa etapa, podemos dar andamento com as divulgações de vagas e contratos, conforme a demanda das nossas empresas parceiras.</p>
                        </div>
                        <div className="flex flex-col items-center gap-4 w-1/3 max-md:w-3/4 max-md:mt-4">
                            <img className="rounded-lg w-full" src={alunos} alt="Imagem de um estudante" />
                        </div>
                    </div>
                </div>
            </section>

        </main>
        <Footer />
        </>
    )
}