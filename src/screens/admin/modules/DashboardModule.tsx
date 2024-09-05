import { CardDashboard } from "../../../components/CardDasboard"
import { HeaderAdmin } from "../../../components/HeaderAdmin"

export function DashboardModule() {
    return (
        <section className="w-5/6 bg-[rgba(255,255,255,0.5)] rounded-[48px] p-8 flex flex-col max-lg:w-full">
            <HeaderAdmin>
                <i className="fa-solid fa-house text-4xl text-prime-orange max-sm:text-2xl"></i>
                <h1 className="uppercase text-4xl text-prime-blue max-md:text-2xl">Dashboard</h1>
            </HeaderAdmin>
            <div className="grid grid-cols-2 gap-12 p-8 h-full max-md:grid-cols-1">
                <CardDashboard title="Estagiários ativos" description="Quantidade de estagiários ativos no mês" value="50" />
                <CardDashboard title="Média de bolsa-auxílio" description="Valor médio geral da bolsa-auxílio" value="R$850,00" />
                <CardDashboard title="Vagas de estágio abertas" description="Cadastrar mais vagas" value="15" />
                <CardDashboard title="Total pago no período" description="Ver mais" value="R$5.600,00" />
            </div>
        </section>
    )

}