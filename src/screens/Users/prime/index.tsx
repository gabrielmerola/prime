import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import pc from '../../../assets/pc1.jpg'

export function Prime() {
    return (
        <>
        <Header page="prime"/>
        <main>
            <section className="w-full h-72 overflow-hidden">
                <img className="w-full h-full object-cover object-center" src="https://via.placeholder.com/500x500" alt="" />
            </section>

            <section className="flex justify-center p-12">
                <div className="w-2/3 flex items-center gap-8 justify-between max-lg:flex-col">
                    <img className="w-64 rounded-full" src={pc} alt="" />
                    
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

            <section>
                
            </section>
        </main>
        <Footer/>
        </>
    )
}