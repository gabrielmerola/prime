import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import banner from "../../../assets/banner-dicas.png";

export function Dicas() {
    return (
        <>
        <Header page="dicas"/>
        <main>
            <section className="w-full h-64 overflow-hidden relative">
                <img className="w-full h-full object-cover object-center" src={banner} alt="Imagem do banner" />
            </section>
        </main>
        <Footer />
        </>
    )
}