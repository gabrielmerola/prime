import { Button } from "../../../components/button/button";
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

            <section className="my-8">
                <div>
                    <h3>Temos o seu ritmo</h3>
                </div>
                <div>
                    <img src="https://via.placeholder.com/200x200" alt="" />
                    <Button>Cadastre-se</Button>
                </div>
            </section>
        </main>
        <Footer />
        </>
    )
}