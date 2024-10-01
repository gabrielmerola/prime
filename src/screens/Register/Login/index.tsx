import { Link } from 'react-router-dom';
import './style.css'
import { useState } from 'react';

export function Login() {
    const [moveRight, setMoveRight] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [areaMobile, setAreaMobile] = useState(false)

    const handleClick = () => {
        setMoveRight(!moveRight);
    };

    return (
        <main id='backgroundPrime' className="w-full h-screen flex items-center justify-center">
            <section className='relative flex rounded-[64px] bg-[rgba(255,255,255,.4)] shadow-2xl w-2/3 h-2/3 overflow-hidden max-md:w-full max-md:m-4 max-md:flex-col'>
                <div 
                    className={`absolute flex flex-col items-center justify-evenly text-white bg-gradient-to-t z-50 to-[#01144b] to-[50%] from-[#1238a8] top-0 h-full w-1/2 rounded-[64px] duration-500 max-md:hidden ${moveRight ? 'translate-x-0' : 'translate-x-[100%]'}`}
                >
                    <h1 className='font-bold uppercase text-6xl'>Olá!</h1>
                    <div className='flex flex-col items-center gap-4 w-[50%]'>
                        <h3 className='text-xl'>Registre-se:</h3>
                        <div className='flex flex-col gap-2 w-full'>
                            <Link to={"/cadastro/estudante"} className='w-full text-center p-4 rounded-full bg-white text-prime-blue uppercase font-bold duration-200 hover:bg-prime-orange hover:text-white'>Estudante</Link>
                            <Link to={"/cadastro/empresa"} className='w-full text-center p-4 rounded-full bg-white text-prime-blue uppercase font-bold duration-200 hover:bg-prime-orange hover:text-white'>Empresa</Link>
                            <Link to={"/cadastro/ie"} className='w-full text-center p-4 rounded-full bg-white text-prime-blue uppercase font-bold duration-200 hover:bg-prime-orange hover:text-white'>Instituições de Ensino</Link>
                        </div>
                    </div>
                </div>
                {/* LOGIN */}
                <div className={`w-1/2 p-6 flex-col items-center justify-evenly max-md:w-full max-md:h-full ${areaMobile ? 'hidden' : 'flex'}`}>
                    <h1 className='font-bold uppercase text-6xl'>Login</h1>
                    <div className='flex flex-col items-center gap-4 w-[80%]'>
                        <input className='w-full bg-gray-200 p-4 rounded-full' type="email" placeholder='E-mail' />
                        <div className='w-full bg-gray-200 rounded-full flex items-center'>
                            <input className='bg-transparent p-4 rounded-full w-full' type={showPassword ? 'text' : 'password'} placeholder='Senha'/>
                            {showPassword ?
                                <i onClick={()=>setShowPassword(!showPassword)} className="fa-solid fa-eye text-2xl mr-4"></i>
                            :
                                <i  onClick={()=>setShowPassword(!showPassword)} className="fa-solid fa-eye-slash text-2xl mr-4"></i>
                            }
                        </div>
                        <span className='cursor-pointer text-prime-blue font-semibold text-lg text-center'>Esqueceu sua senha?</span>
                    </div>
                    <Link to="/admin/dashboard" className='text-center w-1/2 p-4 rounded-full bg-gradient-to-l to-[#01144b] to-[50%] from-[#1238a8] text-white uppercase font-bold duration-200 hover:brightness-150 max-md:w-full'>Entrar</Link>
                    <Link to={"/cadastro"} className='cursor-pointer text-prime-blue font-semibold md:hidden'>Não tem cadastro?</Link>
                </div>
                {/* CADASTRO */}
                <div className={`w-1/2 p-6 rounded-r-3xl max-md:w-full max-md:h-full ${areaMobile ? "" : "max-md:hidden"}`}>
                    <button 
                        type='button'
                        onClick={handleClick}
                    >
                        {moveRight ? 'Entrar' : 'Voltar'}
                    </button>
                    <p onClick={()=>setAreaMobile(false)} className='cursor-pointer text-prime-blue font-semibold md:hidden'>Já tem cadastro?</p>
                </div>
            </section>
        </main>
    );
}
