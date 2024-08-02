import { Link } from 'react-router-dom'
import logo from '../../assets/primen.png'

export function Footer(){
    return (
        <footer className='bg-prime-blue'>
            <div className="flex items-center justify-center gap-12 p-12 max-lg:flex-col">
                <div className='flex flex-col gap-4'>
                    <img className='w-64' src={logo} alt="Logo da Prime Estágios" />
                    <div className='flex flex-col'>
                        <span className='font-bold text-white'>Horário de atendimento:</span>
                        <span className='text-md text-white'>Segunda à sexta, das 9h às 18h.</span>
                    </div>
                </div>
                {/* Accessos Rápidos */}
                <div className='flex gap-12 max-md:flex-col'>
                    <div className='w-72 max-sm:w-full'>
                        <span className='text-xl font-bold uppercase text-yellow-500'>acesso rápido</span>
                        <div className='flex flex-col gap-4 mt-5'>
                            <Link className='text-white text-md border-b pb-2 border-blue-500 duration-200 hover:text-prime-orange' to="/prime"><i className='pi pi-angle-right'></i>Quem Somos</Link>
                            <Link className='text-white text-md border-b pb-2 border-blue-500 duration-200 hover:text-prime-orange' to="/dicas"><i className='pi pi-angle-right'></i>Dicas</Link>
                            <Link className='text-white text-md border-b pb-2 border-blue-500 duration-200 hover:text-prime-orange' to="/contato"><i className='pi pi-angle-right'></i>Fale Conosco</Link>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 w-72 max-sm:w-full'>
                        <Link className='text-white text-md border-b pb-2 border-blue-500 duration-200 hover:text-prime-orange' to="/"><i className='pi pi-angle-right'></i>Vagas</Link>
                        <Link className='text-white text-md border-b pb-2 border-blue-500 duration-200 hover:text-prime-orange' to="/estudantes"><i className='pi pi-angle-right'></i>Estudantes</Link>
                        <Link className='text-white text-md border-b pb-2 border-blue-500 duration-200 hover:text-prime-orange' to="/ie"><i className='pi pi-angle-right'></i>Instituições de Ensino</Link>
                        <Link className='text-white text-md border-b pb-2 border-blue-500 duration-200 hover:text-prime-orange' to="/para-empresas"><i className='pi pi-angle-right'></i>Empresas</Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-center pb-4'>
                <span className='text-sm text-white w-[70%]'>Endereço: R. Joana Angélica, 249-SI. 14- Bairro Barcelona - São Caetano do Sul/SP CEP 09551-050. Não são realizados qualquer tipo de atendimento pessoal em nosso escritório. Nosso atendimento é personalizado e realizado através do <i className='pi pi-whatsapp'></i> telefone/whatsapp.</span>
            </div>
        </footer>
    )
}