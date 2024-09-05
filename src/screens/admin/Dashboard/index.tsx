import { useState } from "react";
import { DashboardModule } from "../modules/DashboardModule";
import { EstagiariosModule } from "../modules/EstagiariosModule";
import { InstituicoesModule } from "../modules/InstituicoesModule";
import { EmpresasModule } from "../modules/EmpresasModule";
import { VagasModule } from "../modules/VagasModule";
import { UsuariosModule } from "../modules/UsuariosModule";

export function Dashboard() {
    const [screen, setScreen] = useState<string>('dashboard');
    const [level, setLevel] = useState<number>(10);

    return (
        <main id="backgroundPrime" className="w-full min-h-screen p-8 flex gap-4 max-lg:flex-col">
            <nav className="w-1/6 bg-gradient-to-t z-50 to-[#01144b] to-[50%] from-[#1238a8] text-white rounded-[48px] p-4 max-lg:w-full max-lg:flex max-lg:items-center max-lg:justify-between">
                <div className="flex flex-col lg:items-center lg:justify-center">
                    <img className="w-1/2 rounded-full" src="http://via.placeholder.com/150" alt="" />
                </div>
                <i className="fa-solid fa-bars text-3xl lg:hidden"></i>
                <div className="flex flex-col items-center justify-center lg:mt-16 gap-4 relative max-lg:flex-row max-lg:hidden">
                    <div onClick={() => setScreen('dashboard')} className={`flex items-center w-[75%] p-2 cursor-pointer duration-300 rounded-lg hover:text-black hover:bg-prime-orange z-10 max-xl:flex-col ${screen === 'dashboard' ? 'text-black bg-prime-orange' : 'text-white'}`}>
                        <i className="fa-solid fa-home text-2xl w-1/4"></i>
                        <span className="text-xl">Dashboard</span>  
                    </div>
                    <div onClick={() => setScreen('usuarios')} className={`flex items-center w-[75%] p-2 cursor-pointer duration-300 rounded-lg hover:text-black hover:bg-prime-orange max-xl:flex-col ${screen === 'usuarios' ? 'text-black bg-prime-orange' : 'text-white'}`}>
                        <i className="fa-solid fa-user text-2xl w-1/4"></i>
                        <span className="text-xl">Usuários</span>  
                    </div>
                    <div onClick={() => {
                        setScreen('estagiarios')
                        setLevel(10)
                    }} className={`flex items-center w-[75%] p-2 cursor-pointer duration-300 rounded-lg hover:text-black hover:bg-prime-orange z-10 max-xl:flex-col ${screen === 'estagiarios' ? 'text-black bg-prime-orange' : 'text-white'}`}>
                        <i className="fa-solid fa-graduation-cap text-2xl w-1/4"></i>
                        <span className="text-xl">Estagiários</span>  
                    </div>
                    {/* menu de estagiarios */}
                    <div className={`relative flex-col gap-5 ml-6 ${screen === 'estagiarios' ? 'flex' : 'hidden'}`}>
                        <div className="w-[2px] h-full bg-white absolute top-0 left-[7px]">
                            <div className={`w-[2px] duration-300 bg-prime-orange absolute top-0 ${level == 25 ? "h-[25%]" : level == 50 ? "h-1/2" : level == 75 ? "h-[75%]" : level == 100 ? "h-[100%]" : "h-[10%]"}`}></div>
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
                    
                    <div onClick={() => setScreen('instituicoes')} className={`flex items-center w-[75%] p-2 cursor-pointer duration-300 rounded-lg hover:text-black hover:bg-prime-orange z-10 max-xl:flex-col ${screen === 'instituicoes' ? 'text-black bg-prime-orange' : 'text-white'}`}>
                        <i className="fa-solid fa-landmark text-2xl w-1/4"></i>
                        <span className="text-xl">Instituições</span>  
                    </div>
                    <div onClick={() => setScreen('empresas')} className={`flex items-center w-[75%] p-2 cursor-pointer duration-300 rounded-lg hover:text-black hover:bg-prime-orange z-10 max-xl:flex-col ${screen === 'empresas' ? 'text-black bg-prime-orange' : 'text-white'}`}>
                        <i className="fa-solid fa-building text-2xl w-1/4"></i>
                        <span className="text-xl">Empresas</span>  
                    </div>
                    <div onClick={() => setScreen('vagas')} className={`flex items-center w-[75%] p-2 cursor-pointer duration-300 rounded-lg hover:text-black hover:bg-prime-orange z-10 max-xl:flex-col ${screen === 'vagas' ? 'text-black bg-prime-orange' : 'text-white'}`}>
                        <i className="fa-solid fa-briefcase text-2xl w-1/4"></i>
                        <span className="text-xl">Vagas</span>  
                    </div>
                </div>
            </nav> 
            
            {/* AREA MUDA DE ACORDO COM O SCREEN */}
            {screen === 'dashboard' ? <DashboardModule /> : 
            screen === 'usuarios' ? <UsuariosModule /> :
            screen === 'estagiarios' ? <EstagiariosModule level={level} setLevel={setLevel} setScreen={setScreen} /> :
            screen === 'instituicoes' ? <InstituicoesModule /> :
            screen === 'empresas' ? <EmpresasModule /> :
            screen === 'vagas' ? <VagasModule /> : null
            }
        </main>
    )
}