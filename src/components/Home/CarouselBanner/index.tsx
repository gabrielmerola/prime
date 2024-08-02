import './style.css';
import { Carousel } from "primereact/carousel";
import banner1 from "../../../assets/banner.png";
import banner2 from "../../../assets/banner2.png";
import { Button } from '../../button/button';
import { Link } from 'react-router-dom';

export function CarouselBanner() {
    const imagesList = [
        {image: banner1},
        {image: banner2}
    ]

    return (
        <section className='relative'>
            <Carousel circular autoplayInterval={6000} value={imagesList} numVisible={1} numScroll={2} itemTemplate={(image: {image: string}) => {
                return (
                    <div className="bg-cover">
                        <img className="object-cover w-full h-[572px]" src={image.image}/>
                    </div>
                )
            }} />
            <div className='absolute top-0 w-full h-full flex items-center justify-center'>
                <div className='bg-[rgba(11,64,124,.8)] p-12 rounded-lg text-white flex flex-col gap-4'>
                    <h1 className='font-bold text-6xl'>Para Empresas</h1>
                    <span>Pesquise os melhores candidatos disponíveis.</span>
                    <div className='flex gap-4'>
                        <Button href='/login' font='bold'>Cadastre-se agora</Button>
                        <Button href='/para-empresas' font='bold' color='blue_light'>Conheça Mais</Button>
                    </div>
                    <span>Se preferir, entre em contato pelo <Link className='text-prime-orange hover:underline' to="https://api.whatsapp.com/send/?phone=5511974446610&text=Olá%2C+entrei+pelo+site+Prime+Estágios&type=phone_number&app_absent=0">Whatsapp</Link></span>
                </div>
            </div>
        </section>
    )
}