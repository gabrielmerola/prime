import { Carousel } from "primereact/carousel";

import anhanguera from '../../../assets/escolas/anhanguera.jpg';
import belasartes from '../../../assets/escolas/belasartes.jpg';
import cps from '../../../assets/escolas/cps.jpg';
import cruzeirodosul from '../../../assets/escolas/cruzeirodosul.jpg';
import espm from '../../../assets/escolas/espm.jpg';
import estacio from '../../../assets/escolas/estacio.jpg';
import fapss from '../../../assets/escolas/fapss.jpg';
import fasb from '../../../assets/escolas/fasb.jpg';
import fmu from '../../../assets/escolas/fmu.jpg';
import fsa from '../../../assets/escolas/fsa.jpg';
import maua from '../../../assets/escolas/maua.jpg';
import melies from '../../../assets/escolas/melies.jpg';
import metodista from '../../../assets/escolas/metodista.jpg';
import pucminas from '../../../assets/escolas/pucminas.jpg';
import pucsp from '../../../assets/escolas/pucsp.jpg';
import saojudas from '../../../assets/escolas/saojudas.jpg';
import senac from '../../../assets/escolas/senac.jpg';
import unicid from '../../../assets/escolas/unicid.jpg';
import uninove from '../../../assets/escolas/uninove.jpg';
import uninter from '../../../assets/escolas/uninter.jpg';
import unip from '../../../assets/escolas/unip.jpg';
import uscs from '../../../assets/escolas/uscs.jpg';

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

const items = [
    anhanguera, belasartes, cps, cruzeirodosul, espm, estacio, fapss, fasb, fmu, fsa, maua, melies, metodista, pucminas, pucsp, saojudas, senac, unicid, uninove, uninter, unip, uscs
];

export function CarouselEscolas() {
    return (
        <Carousel 
            className="w-[70%] max-md:w-full"
            circular
            responsiveOptions={responsiveOptions}
            autoplayInterval={6000} 
            value={items}
            numVisible={4} 
            numScroll={1}
            itemTemplate={(item: any) => {
            return (
                <div className="p-4">
                    <img className="h-44 w-44 rounded-md shadow-xl object-center hover:transform hover:scale-110 hover:transition-transform duration-700" src={item} alt={''} />
                </div>
            );
            }}
        />
    )
}