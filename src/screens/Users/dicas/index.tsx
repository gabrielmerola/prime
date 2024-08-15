import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import banner from "../../../assets/banner-dicas.png";
import { CardDicas } from "../../../components/CardDicas";

export function Dicas() {
    const dicas = [
        {
            'img': 'https://via.placeholder.com/500x500',
            'title': 'Navegando com Cautela – O cuidado com as Informações que buscamos',
            'description': 'Administração, Dicas, Ensino Superior, Ensino Técnico, Graduação'
        },
        {
            'img': 'https://via.placeholder.com/500x500',
            'title': 'Trabalho em Equipe. Questão de Sobrevivência?',
            'description': 'Administração, Administração de Empresas, Dicas, Gestão em Recursos Humanos, Processos Gerenciais'
        },
        {
            'img': 'https://via.placeholder.com/500x500',
            'title': 'Cuidados com os Pensamentos Nocivos!!!',
            'description': 'Dicas'
        },
        {
            'img': 'https://via.placeholder.com/500x500',
            'title': 'Como obter o bom desempenho Profissional?',
            'description': 'Dicas'
        },
        {
            'img': 'https://via.placeholder.com/500x500',
            'title': 'Atendimento Humanizado',
            'description': 'Dicas'
        },
    ]
    return (
        <>
        <Header page="dicas"/>
        <main>
            <section className="w-full h-64 overflow-hidden relative">
                <img className="w-full h-full object-cover object-center" src={banner} alt="Imagem do banner" />
            </section>

            <section className="flex justify-center">
                <div className="w-2/3 my-16 grid grid-cols-4 gap-4">
                    {dicas.map((item, index) => (
                        <CardDicas item={item} index={index} />
                    ))}
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}