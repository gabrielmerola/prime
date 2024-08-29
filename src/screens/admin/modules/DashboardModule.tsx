export function DashboardModule() {
    return (
        <section className="w-5/6 bg-[rgba(255,255,255,0.5)] rounded-[48px] p-8 flex flex-col justify-center">
            <h1 className="font-bold text-3xl mb-8 uppercase">Dashboard</h1>
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
    )

}