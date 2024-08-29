export function EstagiariosModule({ level, setLevel, setScreen }: { level: number, setLevel: (level: number) => void, setScreen: (screen: string) => void }) {
    return (
        <section className="w-5/6 bg-[rgba(255,255,255,0.5)] rounded-[48px] p-8">
            <h1 className="font-bold text-3xl mb-8 uppercase">Estagiários - {level === 10 ? 'Perfil Pessoal' : level === 25 ? 'Perfil Escolar' : level === 50 ? 'Perfil do Estágio' : level === 75 ? 'Histórico de Estágio' : 'Alterar Senha'}</h1>
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
                    <span>Histórico de Estágio</span>
                </button>
                <button className="bg-prime-orange text-white rounded-lg p-2" onClick={() => {
                    setLevel(100)
                    setScreen('estagiarios')
                }}>
                    <span>Alterar Senha</span>
                </button>
            </div>
        </section>
    )
}