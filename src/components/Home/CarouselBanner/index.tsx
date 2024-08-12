import './style.css';
import { Carousel } from "primereact/carousel";
import banner1 from "../../../assets/banner.png";
import banner2 from "../../../assets/banner2.png";
import { Button } from '../../button/button';
import { Link } from 'react-router-dom';

export function CarouselBanner() {
    const imagesList = [
        {
            image: banner1,
            title: "Para Empresas",
            subtitle: "Pesquise os melhores candidatos disponíveis.",
            button1Text: "Cadastre-se agora",
            button1Href: "/login",
            button2Text: "Conheça Mais",
            button2Href: "/para-empresas"
        },
        {
            image: banner2,
            title: "Para Estudantes",
            subtitle: "Cadastre seu currículo hoje mesmo.",
            button1Text: "Começar agora",
            button1Href: "/login",
            button2Text: "Veja as vantagens",
            button2Href: "/estudantes"
        }
    ];

    return (
        <section className='relative'>
            <Carousel circular autoplayInterval={3000} value={imagesList} numVisible={1} numScroll={1} itemTemplate={(item) => {
                return (
                    <div className="relative">
                        <img className="object-cover w-full h-[572px]" src={item.image} />
                        <div className='absolute top-0 w-full h-full flex p-4 sm:p-8'>
                            <div className='bg-[rgba(11,64,124,.8)] max-md:w-full p-6 sm:p-12 rounded-lg text-white flex flex-col justify-center gap-4'>
                                <h1 className='font-bold text-2xl sm:text-6xl uppercase'>{item.title}</h1>
                                <span>{item.subtitle}</span>
                                <div className='flex gap-4 flex-wrap'>
                                    <Button href={item.button1Href} font='bold'>{item.button1Text}</Button>
                                    <Button href={item.button2Href} font='bold' color='blue_light'>{item.button2Text}</Button>
                                </div>
                                <span>Se preferir, entre em contato pelo <Link className='text-prime-orange hover:underline' to="https://api.whatsapp.com/send/?phone=5511974446610&text=Olá%2C+entrei+pelo+site+Prime+Estágios&type=phone_number&app_absent=0">Whatsapp</Link></span>
                            </div>
                        </div>
                    </div>
                )
            }} />
        </section>
    )
}
