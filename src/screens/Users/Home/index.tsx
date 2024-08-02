import { Footer } from "../../../components/Footer"
import { Header } from "../../../components/Header"
import { CarouselList } from "../../../components/Home/CarouselList"
import { CarouselBanner } from "../../../components/Home/CarouselBanner"
import imgPessoas from "../../../assets/imgpessoas.png";
import { Button } from "../../../components/button/button";

export function Home() {
  return (
    <>
      <Header page=""/>

      <main className="px-4 bg-gray-100">
        <CarouselBanner />

        <section className="flex flex-col items-center py-4">
          <div className="flex gap-4 w-[70%] items-center mb-8">
            <h3 className="text-2xl text-prime-blue font-bold border-b-4 border-prime-orange max-sm:text-base">Confira as Vagas em Destaque</h3>
            <i className="fa-regular fa-newspaper text-4xl text-prime-orange"></i>
          </div>

          <CarouselList />
        </section>

        <section className="flex flex-col items-center py-8">
          <div className="flex gap-4 w-[70%] items-center mb-8">
            <h3 className="text-2xl text-prime-blue font-bold border-b-4 border-prime-orange max-sm:text-base">Dicas sobre carreira com a Prime!</h3>
            <i className="fa-regular fa-comment text-4xl text-prime-orange"></i>
          </div>

          <div className="flex flex-wrap gap-4 justify-around w-[70%]">
            <div className="w-72 h-52 rounded-xl overflow-hidden">
              <img className="hover:scale-125 duration-500" src="https://via.placeholder.com/500x500" alt="" />
            </div>
            <div className="w-72 h-52 rounded-xl overflow-hidden">
              <img className="hover:scale-125 duration-500" src="https://via.placeholder.com/500x500" alt="" />
            </div>
            <div className="w-72 h-52 rounded-xl overflow-hidden">
              <img className="hover:scale-125 duration-500" src="https://via.placeholder.com/500x500" alt="" />
            </div>
          </div>
        </section>

        <section className="flex justify-center max-lg:items-center max-lg:flex-col py-4">
          <img className="w-[30%] max-md:w-[60%] max-sm:w-full" src={imgPessoas} alt="Imagem de Estudantes" />
          <div className="flex flex-col gap-8 items-start w-1/3 max-lg:w-full">
            <h3 className="text-prime-blue font-bold text-5xl">Estudantes</h3>
            <span className="text-gray-400">Estudante cadastre o seu currículo e seja procurado pelas melhoras empresas através das nossas oportunidades de estágio.</span>
            <Button href="/login">Cadastre seu currículo gratuitamente</Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}