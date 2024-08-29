import { useState } from "react";

export function Dashboard() {
    const [screen, setScreen] = useState<string>('dashboard');
    const [level, setLevel] = useState<number>(10);

    return (
        <main id="backgroundPrime" className="w-full h-screen p-8 flex gap-4">
            <nav className="w-1/6 bg-gradient-to-t z-50 to-[#01144b] to-[50%] from-[#1238a8] text-white rounded-[48px] p-4">
                <div className="flex flex-col items-center justify-center">
                    <img className="w-1/2 rounded-full" src="http://via.placeholder.com/150" alt="" />
                </div>
                <div className="flex flex-col items-center justify-center mt-16 gap-4 relative">
                    <div onClick={() => setScreen('dashboard')} className={`flex items-center w-[75%] p-2 cursor-pointer duration-300 rounded-lg hover:text-black hover:bg-prime-orange z-10 ${screen === 'dashboard' ? 'text-black bg-prime-orange' : 'text-white'}`}>
                        <i className="fa-solid fa-home text-2xl w-1/4"></i>
                        <span className="text-xl">Dashboard</span>  
                    </div>
                    <div onClick={() => setScreen('usuarios')} className={`flex items-center w-[75%] p-2 cursor-pointer duration-300 rounded-lg hover:text-black hover:bg-prime-orange z-10 ${screen === 'usuarios' ? 'text-black bg-prime-orange' : 'text-white'}`}>
                        <i className="fa-solid fa-user text-2xl w-1/4"></i>
                        <span className="text-xl">Usuários</span>  
                    </div>
                    <div onClick={() => {
                        setScreen('estagiarios')
                        setLevel(10)
                    }} className={`flex items-center w-[75%] p-2 cursor-pointer duration-300 rounded-lg hover:text-black hover:bg-prime-orange z-10 ${screen === 'estagiarios' ? 'text-black bg-prime-orange' : 'text-white'}`}>
                        <i className="fa-solid fa-graduation-cap text-2xl w-1/4"></i>
                        <span className="text-xl">Estagiários</span>  
                    </div>
                    {/* menu de estagiarios */}
                    <div className={`relative flex-col gap-5 ml-6 ${screen === 'estagiarios' ? 'flex' : 'hidden'}`}>
                        <div className="w-[2px] h-full bg-white absolute top-0 left-[7px]">
                            <div className={`w-[2px] h-[${level}%] duration-300 bg-prime-orange absolute top-0`}></div>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 z-10 bg-prime-orange border-2 border-prime-orange rounded-full"/>
                            <span>Perfil Pessoal</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className={`h-4 w-4 z-10 duration-300 border-2 ${level >= 25 ? 'bg-prime-orange border-prime-orange' : 'bg-prime-blue border-white'} rounded-full`}/>
                            <span>Perfil Escolar</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className={`h-4 w-4 z-10 duration-300 border-2 ${level >= 50 ? 'bg-prime-orange border-prime-orange' : 'bg-prime-blue border-white'} rounded-full`}/>
                            <span>Perfil do Estágio</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className={`h-4 w-4 z-10 duration-300 border-2 ${level >= 75 ? 'bg-prime-orange border-prime-orange' : 'bg-prime-blue border-white'} rounded-full`}/>
                            <span>Histórico de Estágio</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className={`h-4 w-4 z-10 duration-300 border-2 ${level >= 100 ? 'bg-prime-orange border-prime-orange' : 'bg-prime-blue border-white'} rounded-full`}/>
                            <span>Alterar Senha</span>
                        </div>
                    </div>
                    
                    <div onClick={() => setScreen('instituicoes')} className={`flex items-center w-[75%] p-2 cursor-pointer duration-300 rounded-lg hover:text-black hover:bg-prime-orange z-10 ${screen === 'instituicoes' ? 'text-black bg-prime-orange' : 'text-white'}`}>
                        <i className="fa-solid fa-landmark text-2xl w-1/4"></i>
                        <span className="text-xl">Instituições</span>  
                    </div>
                    <div onClick={() => setScreen('empresas')} className={`flex items-center w-[75%] p-2 cursor-pointer duration-300 rounded-lg hover:text-black hover:bg-prime-orange z-10 ${screen === 'empresas' ? 'text-black bg-prime-orange' : 'text-white'}`}>
                        <i className="fa-solid fa-building text-2xl w-1/4"></i>
                        <span className="text-xl">Empresas</span>  
                    </div>
                    <div onClick={() => setScreen('vagas')} className={`flex items-center w-[75%] p-2 cursor-pointer duration-300 rounded-lg hover:text-black hover:bg-prime-orange z-10 ${screen === 'vagas' ? 'text-black bg-prime-orange' : 'text-white'}`}>
                        <i className="fa-solid fa-briefcase text-2xl w-1/4"></i>
                        <span className="text-xl">Vagas</span>  
                    </div>
                </div>
            </nav> 
            
            {/* AREA MUDA DE ACORDO COM O SCREEN */}
            <section className="w-5/6 rounded-[48px] p-8 flex flex-col justify-center">
                <h1 className="font-bold text-3xl mb-8 uppercase">{screen === 'estagiarios' ? level === 10 ? 'estagiários - Perfil Pessoal' : level === 25 ? 'estagiários - Perfil Escolar' : level === 50 ? 'estagiários - Perfil do Estágio' : level === 75 ? 'estagiários - Histórico de Estágio' : 'estagiários - Alterar Senha' : screen}</h1>
                <h1>Teste de animação da barra estagiario</h1>
                <div className="flex flex-col items-start gap-4 mt-8">
                    <button className="bg-prime-orange text-white rounded-lg p-2" onClick={() => {
                        setLevel(10)
                        setScreen('estagiarios')
                    }}>
                        <span>Perfil Pessoal</span>
                    </button>
                    <button className="bg-prime-orange text-white rounded-lg p-2" onClick={() => {
                        setLevel(25)
                        setScreen('estagiarios')
                    }}>
                        <span>Perfil Escolar</span>
                    </button>
                    <button className="bg-prime-orange text-white rounded-lg p-2" onClick={() => {
                        setLevel(50)
                        setScreen('estagiarios')
                    }}>
                        <span>Perfil do Estágio</span>
                    </button>
                    <button className="bg-prime-orange text-white rounded-lg p-2" onClick={() => {
                        setLevel(75)
                        setScreen('estagiarios')
                    }}>
                        <span>histórico de Estágio</span>
                    </button>
                    <button className="bg-prime-orange text-white rounded-lg p-2" onClick={() => {
                        setLevel(100)
                        setScreen('estagiarios')
                    }}>
                        <span>Alterar Senha</span>
                    </button>
                </div>
                <div className="grid grid-cols-2 gap-8">
                    
                    <div className="bg-gray-100 rounded-[24px] p-6 shadow-md">
                        <h2 className="font-semibold text-xl mb-2">Informação 1</h2>
                        <p>Conteúdo da caixa de informação 1</p>
                    </div>
                    <div className="bg-gray-100 rounded-[24px] p-6 shadow-md">
                        <h2 className="font-semibold text-xl mb-2">Informação 2</h2>
                        <p>Conteúdo da caixa de informação 2</p>
                    </div>
                    <div className="bg-gray-100 rounded-[24px] p-6 shadow-md">
                        <h2 className="font-semibold text-xl mb-2">Informação 3</h2>
                        <p>Conteúdo da caixa de informação 3</p>
                    </div>
                    <div className="bg-gray-100 rounded-[24px] p-6 shadow-md">
                        <h2 className="font-semibold text-xl mb-2">Informação 4</h2>
                        <p>Conteúdo da caixa de informação 4</p>
                    </div>
                </div>
            </section>
        </main>
    )
}