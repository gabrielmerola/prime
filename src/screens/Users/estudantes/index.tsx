import { Button } from "../../../components/button/button";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import estudante from '../../../assets/estudante.png';
import explo from '../../../assets/explo.png';

export function Estudantes() {
    return (
        <>
        <Header page="estudantes"/>
        <main>
            <section className="w-full h-72 overflow-hidden relative">
                <img className="w-full h-full object-cover object-center" src={explo} alt="Imagem do banner" />
                <div className="absolute top-0 w-full h-full flex justify-center">
                    <div className="w-1/2 flex flex-col justify-center gap-2 max-md:w-full max-md:p-4">
                        <h3 className="font-bold text-3xl">Explore o mercado de trabalho</h3>
                        <span>A Prime oferece ferramentas para esse desafio.</span>
                    </div>
                </div>
            </section>

            <section className="my-8 flex justify-center">
                <div className="flex gap-8 w-4/6 max-md:flex-col">
                    <div className="w-2/3 max-md:w-full">
                        <h3 className="text-prime-blue text-2xl border-b-2 border-prime-orange pb-2">Temos o seu ritmo</h3>
                        <div className="flex gap-4 text-gray-400 mt-4 max-md:flex-col">
                            <p className="w-1/2 max-md:w-full">A Prime Estágios será a sua porta de entrada para o mundo do trabalho.<br />Nossa tarefa 
                            é identificar oportunidades que se enquadrem em seu perfil e compatível com a sua atual 
                            formação em andamento.<br />Visamos auxilia-lo(a) com dicas, e informações que atendam a real 
                            necessidade das empresas, afinal, não há formulas mirabolantes para uma colocação. O que há é 
                            muito estudo, pró-atividade, comprometimento e interesse em contribuir com os resultados da 
                            nova contratante. Essas são algumas das necessidades que as empresas buscam em sua futura 
                            contratação.
                            </p>
                            <div className="flex flex-col gap-2 w-1/2 max-md:w-full">
                                <p>Aqui Caminhamos com você. E torcemos pelo seu sucesso.<br />A vantagem de ter um contrato realizado pela Prime é a certeza de que iremos providenciar um contrato devidamente formalizado dentro das exigências legais.</p>
                                <ul className="ml-6 list-disc">
                                    <li>Seguro de Acidentes pessoais com Benefícios.</li>
                                    <li>Acompanhamento do seu estágio e orientações sobre como ter sucesso , sempre que necessitar.</li>
                                    <li>Ferramenta para gerenciar as suas informações!</li>
                                </ul>
                                <p>Nos indique, caso a sua futura contratante necessite de uma assessoria personalizada;</p>
                                <b>Porque aqui você também é Prime.</b>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-4 w-1/3 max-md:w-full">
                        <img className="rounded-full" src={estudante} alt="Imagem de um estudante" />
                        <Button href="/login">Cadastre-se</Button>
                    </div>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}