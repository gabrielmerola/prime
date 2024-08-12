import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { CardApresentacao } from "../../../components/CardApresentacao";

import banner from '../../../assets/orientacoes/banner-orientacoes.png'
import banner2 from '../../../assets/orientacoes/banner2orientacoes.png'
import card1apresentacao from "../../../assets/orientacoes/card1apresentacao.png"
import card2apresentacao from "../../../assets/orientacoes/card2apresentacao.png"
import card3apresentacao from "../../../assets/orientacoes/card3apresentacao.png"
import card4apresentacao from "../../../assets/orientacoes/card4apresentacao.png"
import card5apresentacao from "../../../assets/orientacoes/card5apresentacao.png"
import card6apresentacao from "../../../assets/orientacoes/card6apresentacao.png"
import card7apresentacao from "../../../assets/orientacoes/card7apresentacao.png"
import card8apresentacao from "../../../assets/orientacoes/card8apresentacao.png"

export function Orientacoes() {
    return (
        <>
        <Header page="orientacoes"/>
        <main>
            <section className="w-full h-64 overflow-hidden relative">
                <img className="w-full h-full object-cover object-center" src={banner} alt="Imagem do banner" />
                <div className="absolute top-0 w-full h-full flex items-center justify-center">
                    <div className="w-1/2 max-md:w-full">
                        <div className="bg-[rgb(0,0,0,.5)] text-white w-1/2 max-md:w-full p-8">
                            <h1 className="border-b-2 border-prime-orange mb-4 text-2xl">Lei 11.788/08</h1>
                            <p>primeiros passos</p>
                        </div>
                    </div>
                </div>
            </section>

            <CardApresentacao titulo="Quem pode estagiar?" url={card1apresentacao}>
                <div className="flex flex-col gap-2 text-[15px] text-gray-500">
                    <p>
                        Estudantes de ensino médio, técnico de 2ºgrau, superior e dos anos finais do ensino fundamental, 
                        na modalidade profissional da educação de jovens e adultos (art. 1º da Lei nº 11.788/2008)
                    </p>
                    <p className="font-bold">• Idade mínima: 16 anos. Não tem máxima.</p>
                </div>
            </CardApresentacao>

            <section className="w-full h-64 overflow-hidden relative">
                <img className="w-full h-full object-cover object-center" src={banner2} alt="Imagem do banner" />
            </section>

            {/* JORNADA E CARGA HORARIA */}
            <section className="bg-gray-100 py-8 px-4">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row justify-between gap-8">
                    {/* Coluna 1 */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-blue-900 text-xl md:text-2xl font-bold mb-4">
                        Jornada de atividade em estágio não deve ultrapassar:
                        </h2>
                        <hr className="border-t-4 border-yellow-600 mb-4 w-16" />
                        <p className="text-gray-600 mb-4">
                        <strong>a) 4 (quatro) horas diárias e 20 (vinte) horas semanais</strong>, no caso de estudantes de educação especial e dos anos finais do ensino fundamental na modalidade profissional de educação de jovens e adultos;
                        </p>
                        <p className="text-gray-600">
                        <strong>b) 6 (seis) horas diárias e 30 (trinta) horas semanais</strong>, no caso de estudantes do ensino superior, da educação profissional de nível médio e do ensino médio regular;
                        </p>
                    </div>

                    {/* Coluna 2 */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-blue-900 text-xl md:text-2xl font-bold mb-4">
                        Carga Horária Máxima Permitida
                        </h2>
                        <hr className="border-t-4 border-yellow-600 mb-4 w-16" />
                        <div className="flex flex-col md:flex-row gap-4">
                        {/* Sub-coluna 1 */}
                        <div className="flex-1">
                            <p className="text-gray-600 mb-2">
                            Se a instituição de ensino adotar verificações de aprendizagem periódicas ou finais, nos períodos de avaliação, a carga horária do estágio será reduzida à metade, segundo o estipulado no Termo de Compromisso de Estágio.
                            </p>
                            <p className="text-gray-600">
                            Nesse caso, a instituição de ensino deverá comunicar à parte concedente do estágio, no início do período letivo, as datas de realização de avaliações escolares ou acadêmicas (§2º do art. 10 da Lei nº 11.788/2008).
                            </p>
                        </div>

                        {/* Sub-coluna 2 */}
                        <div className="flex-1">
                            <i className="pi pi-clock text-4xl bg-prime-blue p-2 rounded-full text-prime-orange"></i>
                            <div className="text-blue-900 text-lg font-bold">
                            6 horas diárias
                            </div>
                            <div className="text-blue-900 text-lg font-bold">
                            30 horas semanais
                            </div>
                            <p className="text-gray-600">
                            Pode inserir uma hora de intervalo e não contar ela na carga horária total.
                            <br />
                            Ex: 09:00 às 16:00 (com uma hora de almoço)
                            <br />
                            Nos dias de prova poderá haver redução da jornada de trabalho.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>

            <CardApresentacao titulo="Bolsa Auxílio" url={card2apresentacao} imagem="esquerda">
                <div className="flex flex-col gap-2 text-[15px] text-gray-500">
                    <p>Bolsa Auxílio não é salário… por esse motivo não há “piso de categoria” e nem impostos. São valores sugeridos com base nas empresas ofertantes de vagas na região.</p>
                    <p>Exemplo: vagas de nível superior , área administrativa, Valor médio de bolsa varia no mercado entre R$1.100,00 à R$1.300,00.</p>
                    <p>Se tratarmos do Ensino médio, esse valor está na base de R$ 850,00. Técnico : R$900,00 À R$1.000,00.</p>
                    <p>*Sugerimos valores que fiquem enquadrados dentro de uma média de mercado.</p>
                </div>
            </CardApresentacao>

            <CardApresentacao titulo="Benefícios Obrigatórios" url={card3apresentacao} corFundo="cinza">
                <div className="flex flex-col gap-2 text-[15px] text-gray-500">
                    <p><b>Benefício obrigatório</b>: auxílio transporte.</p>
                    <p>Não há valor determinado, como a CLT</p>
                    <p>A concedente poderá dar um valor fixo.</p>
                </div>
            </CardApresentacao>
            
            <CardApresentacao titulo="Recesso Remunerado" url={card4apresentacao} imagem="esquerda">
                <div className="flex flex-col gap-2 text-[15px] text-gray-500">
                    <p>Recesso Remunerado de 30 dias. A cada 11 meses estagiados, orientamos que  no 12º mês seja concedido o recesso remunerado.</p>
                    <p>O recesso poderá ser concedido em período contínuo ou fracionado, conforme acordado entre as partes, preferencialmente nas férias escolares.</p>
                    <p>Obs . contrato inferior aos 12 meses, mesmo por rescisão antecipada, o estagiário tem o direito de receber a proporcionalidade. 1/12 avos da bolsa por mês estagiado.</p>
                </div>
            </CardApresentacao>

            <CardApresentacao titulo="Saúde e Segurança no Estágio" url={card5apresentacao} corFundo="cinza">
                <div className="flex flex-col gap-2 text-[15px] text-gray-500">
                    <p>Exames Básicos de saúde e Segurança no trabalho. É de responsabilidade da empresa concedente do Estágio de incluir o estagiário nesses exames.</p>
                </div>
            </CardApresentacao>
            
            <CardApresentacao titulo="Seguro de Acidentes Pessoais" url={card6apresentacao} imagem="esquerda">
                <div className="flex flex-col gap-2 text-[15px] text-gray-500">
                    <p>Obrigatório por Lei e providenciado pela Prime Estágios.</p>
                    <p>Apólice Porto Seguro, acima do  valor de mercado, oferecemos um seguro de  R$ 30.000,00 para morte ou invalidez permanente decorrente de acidentes. E através de uma seguradora renomada</p>
                </div>
            </CardApresentacao>

            <CardApresentacao titulo="Relatórios Semestrais" url={card7apresentacao} corFundo="cinza">
                <div className="flex flex-col gap-2 text-[15px] text-gray-500">
                    <p>A Prime subsidiará a sua empresa com esses relatórios.</p>
                    <p>Esse relatório deve ser expedido a cada 6 meses e respondido pela supervisão do estágio. Caso a escola não encaminhe pelo estagiário, a Concedente do estágio poderá utilizar o modelo PRIME e encaminhar para conhecimento da Faculdade.</p>
                </div>
            </CardApresentacao>
            
            <CardApresentacao titulo="Supervisão do Estágio" url={card8apresentacao} imagem="esquerda">
                <div className="flex flex-col gap-2 text-[15px] text-gray-500">
                    <p>O supervisor do estagiário da parte concedente deve ser funcionário do seu quadro de pessoal, com formação ou experiência profissional na área de conhecimento desenvolvida no curso do estagiário (inciso III do art. 9º da Lei 11.788/2008).</p>
                    <p>O supervisor da parte concedente somente pode orientar e supervisionar até 10 (dez) estagiários simultaneamente (inciso III, do art. 9º da Lei 11.788/2008).</p>
                    <p>A Prime irá ajuda-los nesse controle e nos controles de vencimentos de contratos e relatórios.</p>
                    <p><b>**Artº.17 (lei 11.788/08)</b> limita o número de estagiários com relação ao quadro de pessoal quando se refere a contratação do ensino médio.</p>
                </div>
            </CardApresentacao>

            <section className="p-8 flex flex-col items-center gap-4">
                <div className="w-8/12 max-md:w-full">
                    <h2 className="border-b-4 border-prime-orange text-3xl pb-4 text-prime-blue">Qual o papel da Prime Estágios como Agente de Integração?</h2>
                </div>
                <div className="w-8/12 max-md:w-full">
                    <p>Cabe ao agente de integração, como auxiliares no processo de aperfeiçoamento do estágio:</p>
                    <ul>
                        <li>a) identificar as oportunidades de estágio;</li>
                        <li>b) ajustar suas condições de realização;</li>
                        <li>c) fazer o acompanhamento administrativo;</li>
                        <li>d) encaminhar negociação de seguros contra acidentes pessoais;</li>
                        <li>e) cadastrar os estudantes (incisos de Ia V do art. 5º da Lei 11.788/2008).</li>
                    </ul>
                    <p>Os agentes de integração podem, ainda, selecionar os locais de estágio e organizar o cadastro dos concedentes das oportunidades de estágio. (art. 6º da Lei 11.788/2008).</p>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}