import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import banner from '../../../assets/orientacoes/banner-orientacoes.png'

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

            <section>
                
            </section>
        </main>
        <Footer />
        </>
    )
}