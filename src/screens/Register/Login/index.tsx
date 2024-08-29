import { Link } from 'react-router-dom';
import './style.css'
import { useState } from 'react';

export function Login() {
    const [moveRight, setMoveRight] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleClick = () => {
        setMoveRight(!moveRight);
        console.log(moveRight);
    };

    return (
        <main id='backgroundPrime' className="w-full h-screen flex items-center justify-center">
            <section className='relative flex rounded-[64px] bg-[rgba(255,255,255,.4)] shadow-2xl w-2/3 h-2/3 overflow-hidden'>
                <div 
                    className={`absolute flex flex-col items-center justify-evenly text-white bg-gradient-to-t z-50 to-[#01144b] to-[50%] from-[#1238a8] top-0 h-full w-1/2 rounded-[64px] duration-500 ${moveRight ? 'translate-x-0' : 'translate-x-[100%]'}`}
                >
                    <h1 className='font-bold uppercase text-6xl'>Olá!</h1>
                    <div className='flex flex-col items-center gap-4 w-[50%]'>
                        <h3 className='text-xl'>Registre-se:</h3>
                        <div className='flex flex-col gap-2 w-full'>
                            <button onClick={handleClick} className='w-full p-4 rounded-full bg-white text-prime-blue uppercase font-bold duration-200 hover:bg-prime-orange hover:text-white'>Estudante</button>
                            <button onClick={handleClick} className='w-full p-4 rounded-full bg-white text-prime-blue uppercase font-bold duration-200 hover:bg-prime-orange hover:text-white'>Empresa</button>
                            <button onClick={handleClick} className='w-full p-4 rounded-full bg-white text-prime-blue uppercase font-bold duration-200 hover:bg-prime-orange hover:text-white'>Instituições de Ensino</button>
                        </div>
                    </div>
                </div>
                {/* LOGIN */}
                <div className='w-1/2 p-6 flex flex-col items-center justify-evenly'>
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
                        <span className='cursor-pointer text-prime-blue font-semibold text-xl'>Esqueceu sua senha?</span>
                    </div>
                    <Link to="/admin/dashboard" className='text-center w-1/2 p-4 rounded-full bg-gradient-to-l to-[#01144b] to-[50%] from-[#1238a8] text-white uppercase font-bold duration-200 hover:brightness-150'>Entrar</Link>
                </div>
                {/* CADASTRO */}
                <div className='w-1/2 p-6 rounded-r-3xl'>
                    <button 
                        type='button'
                        onClick={handleClick}
                    >
                        {moveRight ? 'Entrar' : 'Voltar'}
                    </button>
                </div>
            </section>
        </main>
    );
}
