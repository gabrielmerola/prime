import { Carousel } from 'primereact/carousel'

import vaga1 from '../../../assets/vaga1.jpg'
import vaga2 from '../../../assets/vaga2.jpg'
import vaga3 from '../../../assets/vaga3.jpg'
import vaga4 from '../../../assets/vaga4.jpg'
import vaga5 from '../../../assets/vaga5.jpg'

const items = [
    {
        title: 'Estágio administrativo e recepção',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. Donec nec odio vitae nunc. Donec nec odio vitae nunc.',
        img: vaga1
    },
    {
        title: 'Suporte Operacional Loja',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. Donec nec odio vitae nunc. Donec nec odio vitae nunc.',
        img: vaga2
    },
    {
        title: 'Estágio de Direito',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. Donec nec odio vitae nunc. Donec nec odio vitae nunc.',
        img: vaga3
    },
    {
        title: 'Educação Infantil',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. Donec nec odio vitae nunc. Donec nec odio vitae nunc.',
        img: vaga4
    },
    {
        title: 'Estudante de pedagogia Noturno',
        description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. Donec nec odio vitae nunc. Donec nec odio vitae nunc.',
        img: vaga5
    }
];

const responsiveOptions = [
    {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 1
    },
    {
        breakpoint: '1199px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1
    },
    {
        breakpoint: '500px',
        numVisible: 1,
        numScroll: 1
    }
];

export function CarouselList() {
    return (
        <Carousel 
            className="w-[70%] max-md:w-full"
            circular
            responsiveOptions={responsiveOptions}
            autoplayInterval={6000} 
            value={items}
            numVisible={4} 
            numScroll={1} 
            indicatorsContentClassName="carousel-indicators"
            itemTemplate={(item: any) => {
            return (
                <div className="p-4">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden">
                        <div className='w-full h-40 overflow-hidden'>
                            <img className="object-cover hover:transform hover:scale-110 hover:transition-transform duration-300 hover:brightness-50" src={item.img} alt={item.title} />
                        </div>
                        <div className="p-4 h-52">
                            <h3 className="uppercase text-lg font-bold">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.description}</p>
                        </div>
                    </div>
                </div>
            );
            }}
        />
    );
}