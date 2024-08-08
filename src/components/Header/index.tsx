import './animations.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import primeLogo from '../../assets/prime.png'

interface HeaderProps {
    page: string;
}

export function Header({ page }:HeaderProps) {
    const [openEmpresa, setOpenEmpresa] = useState(false)
    const [openEstudantes, setOpenEstudantes] = useState(false)
    const [openNav, setOpenNav] = useState(false)
    const [animateNav, setAnimateNav] = useState(false);

    const handleOpenNav = () => {
        setOpenNav(true);
        setAnimateNav(true);
    };
    const handleCloseNav = () => {
        setAnimateNav(false);
        setTimeout(() => setOpenNav(false), 300);
    };

    return (
        <header className='sticky top-0 z-10'>
            <section className={`flex items-center bg-gray-200`}>
                <div className='w-1/2 md:bg-white flex justify-center clip-top-right p-4 max-md:w-full'>
                    <a href="/prime/">
                        <img className='h-20' src={primeLogo} alt="Logo Prime Estágios" />
                    </a>
                </div>
                <div className='w-1/2 flex justify-center items-center max-md:justify-end max-md:p-4'>
                    <div className='flex items-center gap-4 max-md:hidden'>
                        <a href="https://www.linkedin.com/company/prime-estágios">
                            <i className='pi pi-linkedin text-2xl duration-300 hover:text-[1.75rem] text-blue-500'></i>
                        </a>
                        <a href="https://web.facebook.com/primestagios">
                            <i className='pi pi-facebook text-blue-500 text-2xl duration-300 hover:text-[1.75rem]'></i>
                        </a>
                        <a href="https://www.instagram.com/primeestagios_">
                            <i className='pi pi-instagram text-2xl duration-300 hover:text-[1.75rem] bg-gradient-to-tl from-purple-500 to-orange-500 inline-block text-transparent bg-clip-text'></i>
                        </a>
                        <a className='text-sm font-bold mr-4 hover:underline' href="https://api.whatsapp.com/send/?phone=5511974446610&text=Olá%2C+entrei+pelo+site+Prime+Estágios&type=phone_number&app_absent=0">
                            <i className='pi pi-whatsapp text-2xl text-green-500 duration-300 hover:text-[1.75rem]'></i>
                        </a>
                        <Link className='text-sm font-bold duration-200 bg-white hover:text-white hover:bg-prime-orange p-2 rounded-xl' to={"/login"}><i className='pi pi-sign-in'></i> Iniciar Sessão</Link>
                    </div>
                    <div className='hidden max-md:flex'>
                        <i onClick={()=>handleOpenNav()} className='pi pi-bars text-2xl text-white bg-prime-orange p-3 rounded-full'></i>
                    </div>
                </div>
            </section>

            {/* WEBSITE */}
            <nav className='border-[1px] border-b-4 border-b-prime-orange bg-white'>
                <ul className='flex justify-center items-center max-md:hidden'>
                    <li className={`relative uppercase text-sm p-4 w-40 text-center border-x-2 duration-300 hover:bg-gray-100 hover:text-prime-orange ${page == "prime" ? "text-prime-orange" : ""}`}>
                        <Link to={"/prime"}>Sobre a Prime</Link>
                    </li>
                    <li className={`relative uppercase text-sm p-4 w-40 text-center border-r-2 duration-300 hover:bg-gray-100 hover:text-prime-orange ${page == "dicas" ? "text-prime-orange" : ""}`}>
                        <Link to={"/dicas"}>Dicas</Link>
                    </li>
                    <li onMouseEnter={()=>setOpenEmpresa(true)} onMouseLeave={()=>setOpenEmpresa(false)} className='relative p-4 w-40 text-center border-r-2 hover:bg-gray-100'>
                        <div className='flex items-center justify-center cursor-pointer duration-300 hover:text-prime-orange'>
                            <span className='uppercase text-sm'>Empresas</span>
                            <i className='pi pi-angle-down'></i>
                        </div>
                        <div className={`absolute z-50 left-0 mt-4 flex-col bg-[#d6ebb5] p-4 w-52 ${openEmpresa ? "flex" : "hidden"}`}>
                            <Link className={`text-center text-sm border-b-2 border-white p-2 duration-200 hover:text-prime-orange ${page == "para-empresas" ? "text-prime-orange" : ""}`} to={"/para-empresas"}>Diferenciais</Link>
                            <Link className={`text-center text-sm border-b-2 border-white p-2 duration-200 hover:text-prime-orange ${page == "lei-11-788" ? "text-prime-orange" : ""}`} to={"/lei-11-788"}>Legislação</Link>
                            <Link className={`text-center text-sm border-b-2 border-white p-2 duration-200 hover:text-prime-orange ${page == "orientacoes" ? "text-prime-orange" : ""}`} to={"/orientacoes"}>Orientações</Link>
                            <Link className={`text-center text-sm border-b-2 border-white p-2 duration-200 hover:text-prime-orange`} to={"/login"}>Sistema Administrativo</Link>
                        </div>
                    </li>
                    <li onMouseEnter={()=>setOpenEstudantes(true)} onMouseLeave={()=>setOpenEstudantes(false)} className='relative p-4 w-40 text-center border-r-2 hover:bg-gray-100'>
                        <div className='flex items-center justify-center cursor-pointer duration-300 hover:text-prime-orange'>
                            <span className='uppercase text-sm'>Estudantes</span>
                            <i className='pi pi-angle-down'></i>
                        </div>
                        <div className={`absolute z-50 left-0 mt-4 flex-col bg-[#ebe1b5] p-4 w-52 ${openEstudantes ? "flex" : "hidden"}`}>
                            <Link className={`text-center text-sm border-b-2 border-white p-2 duration-200 hover:text-prime-orange ${page == "estudantes" ? "text-prime-orange" : ""}`} to={"/estudantes"}>Vantagens</Link>
                            <Link className='text-center text-sm border-b-2 border-white p-2 duration-200 hover:text-prime-orange' to={"/login"}>Vagas</Link>
                            <Link className='text-center text-sm border-b-2 border-white p-2 duration-200 hover:text-prime-orange' to={"/login"}>Minha Área</Link>
                            <Link className='text-center text-sm border-b-2 border-white p-2 duration-200 hover:text-prime-orange' to={"/login"}>Cadastre-se</Link>
                        </div>
                    </li>
                    <li className={`relative uppercase text-sm p-4 w-52 text-center border-r-2 duration-300 hover:bg-gray-100 hover:text-prime-orange ${page == "ie" ? "text-prime-orange" : ""}`}>
                        <Link to={"/ie"}>Instituições de Ensino</Link>
                    </li>
                    <li className={`relative uppercase text-sm p-4 w-40 text-center border-r-2 duration-300 hover:bg-gray-100 hover:text-prime-orange ${page == "contato" ? "text-prime-orange" : ""}`}>
                        <Link to={"/contato"}>Fale Conosco</Link>
                    </li>
                </ul>
            </nav>

            {/* MOBILE */}
            <nav className={`absolute justify-end top-0 right-0 z-20 bg-[rgba(0,0,0,.3)] w-full h-screen overflow-hidden ${openNav ? "flex" : "hidden"}`}>
                <ul className={`h-screen bg-white w-2/3 flex flex-col items-center ${animateNav ? "slide-in" : "slide-out"}`}>
                    <li className='flex justify-end w-full p-4'>
                        <i onClick={handleCloseNav} className='pi pi-times text-xl bg-prime-orange p-2 text-white'></i>
                    </li>
                    <li className='relative uppercase text-sm p-4 w-40 text-center duration-300 hover:text-prime-orange'>
                        <Link to={"/prime"}>Sobre a Prime</Link>
                    </li>
                    <li className='relative uppercase text-sm p-4 w-40 text-center duration-300 hover:text-prime-orange'>
                        <Link to={"/dicas"}>Dicas</Link>
                    </li>
                    <li onClick={() => setOpenEmpresa(!openEmpresa)} className='p-4 w-40 text-center'>
                        <div className='flex items-center justify-center cursor-pointer duration-300 hover:text-prime-orange'>
                            <span className='uppercase text-sm'>Empresas</span>
                            <i className='pi pi-angle-down'></i>
                        </div>
                    </li>
                    <div className={`bg-[#d6ebb5] p-4 w-full ${openEmpresa ? "flex flex-col" : "hidden"}`}>
                        <Link className='text-center text-sm border-b-2 border-white p-2 duration-200 hover:text-prime-orange' to={"/para-empresas"}>Diferenciais</Link>
                        <Link className='text-center text-sm border-b-2 border-white p-2 duration-200 hover:text-prime-orange' to={"/lei-11-788"}>Legislação</Link>
                        <Link className='text-center text-sm border-b-2 border-white p-2 duration-200 hover:text-prime-orange' to={"/orientacoes"}>Orientações</Link>
                        <Link className='text-center text-sm border-b-2 border-white p-2 duration-200 hover:text-prime-orange' to={"/login"}>Sistema Administrativo</Link>
                    </div>
                    <li onClick={() => setOpenEstudantes(!openEstudantes)} className='relative p-4 w-40 text-center'>
                        <div className='flex items-center justify-center cursor-pointer duration-300 hover:text-prime-orange'>
                            <span className='uppercase text-sm'>Estudantes</span>
                            <i className='pi pi-angle-down'></i>
                        </div>
                    </li>
                    <div className={`bg-[#ebe1b5] p-4 w-full ${openEstudantes ? "flex flex-col" : "hidden"}`}>
                        <Link className='text-center text-sm border-b-2 border-white p-2 duration-200 hover:text-prime-orange' to={"/estudantes"}>Vantagens</Link>
                        <Link className='text-center text-sm border-b-2 border-white p-2 duration-200 hover:text-prime-orange' to={"/login"}>Vagas</Link>
                        <Link className='text-center text-sm border-b-2 border-white p-2 duration-200 hover:text-prime-orange' to={"/login"}>Minha Área</Link>
                        <Link className='text-center text-sm border-b-2 border-white p-2 duration-200 hover:text-prime-orange' to={"/login"}>Cadastre-se</Link>
                    </div>
                    <li className='relative uppercase text-sm p-4 w-52 text-center duration-300 hover:text-prime-orange'>
                        <Link className='text-center' to={"/ie"}>Instituições de Ensino</Link>
                    </li>
                    <li className='relative uppercase text-sm p-4 w-40 text-center duration-300 hover:text-prime-orange'>
                        <Link to={"/contato"}>Fale Conosco</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}