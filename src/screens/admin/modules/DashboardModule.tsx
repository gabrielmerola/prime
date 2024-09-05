import { CardDashboard } from "../../../components/CardDasboard"

export function DashboardModule() {
    return (
        <section className="w-5/6 bg-[rgba(255,255,255,0.5)] rounded-[48px] p-8 flex flex-col">
            <nav className="flex items-center justify-end gap-8">
                <i className="fa-solid fa-bell text-4xl text-prime-orange"></i>
                <i className="fa-regular fa-user text-4xl text-prime-orange bg-prime-blue px-3 py-2 rounded-full"></i>
            </nav>
            <div className="flex items-center gap-4 mb-8">
                <i className="fa-solid fa-house text-4xl text-prime-orange"></i>
                <h1 className="uppercase text-4xl text-prime-blue">Dashboard</h1>
            </div>
            <div className="grid grid-cols-2 gap-12 p-8 h-full mt-16">
                <CardDashboard title="Estagiários ativos" description="Quantidade de estagiários ativos no mês" value="50" />
                <CardDashboard title="Média de bolsa-auxílio" description="Valor médio geral da bolsa-auxílio" value="R$850,00" />
                <CardDashboard title="Vagas de estágio abertas" description="Cadastrar mais vagas" value="15" />
                <CardDashboard title="Total pago no período" description="Ver mais" value="R$5.600,00" />
            </div>
        </section>
    )

}