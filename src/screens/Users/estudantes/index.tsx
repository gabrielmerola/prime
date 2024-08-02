import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";

export function Estudantes() {
    return (
        <>
        <Header page="estudantes"/>
        <main>
            <section className="w-full h-72 overflow-hidden">
                <img className="w-full h-full object-cover object-center" src="https://via.placeholder.com/500x500" alt="" />
            </section>
        </main>
        <Footer />
        </>
    )
}