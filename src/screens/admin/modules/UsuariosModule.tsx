import { useEffect, useState } from "react";
import { HeaderAdmin } from "../../../components/HeaderAdmin";
import { UsersRepository } from "../../../api/repositories/users_repository";

const data = [
    { name: "João da Silva", email: "joao@gmail.com", cpf: "123.456.789-00", papel: "Administrador", sector: "TI" },
    { name: "Maria Oliveira", email: "maria@gmail.com", cpf: "234.567.890-11", papel: "Usuário", sector: "Financeiro" },
    { name: "Carlos Souza", email: "carlos@gmail.com", cpf: "345.678.901-22", papel: "Supervisor", sector: "Marketing" },
    { name: "Ana Pereira", email: "ana@gmail.com", cpf: "456.789.012-33", papel: "Gerente", sector: "RH" },
    { name: "Pedro Costa", email: "pedro@gmail.com", cpf: "567.890.123-44", papel: "Usuário", sector: "TI" },
    { name: "Fernanda Lima", email: "fernanda@gmail.com", cpf: "678.901.234-55", papel: "Supervisor", sector: "Vendas" },
    { name: "Rafael Almeida", email: "rafael@gmail.com", cpf: "789.012.345-66", papel: "Administrador", sector: "Compras" },
    { name: "Juliana Cardoso", email: "juliana@gmail.com", cpf: "890.123.456-77", papel: "Usuário", sector: "TI" },
    { name: "Lucas Mendes", email: "lucas@gmail.com", cpf: "901.234.567-88", papel: "Gerente", sector: "Marketing" },
    { name: "Beatriz Santos", email: "beatriz@gmail.com", cpf: "012.345.678-99", papel: "Usuário", sector: "Financeiro" },
    { name: "Paulo Barbosa", email: "paulo@gmail.com", cpf: "123.654.789-00", papel: "Supervisor", sector: "TI" },
    { name: "Mariana Rodrigues", email: "mariana@gmail.com", cpf: "234.765.890-11", papel: "Usuário", sector: "Recursos Humanos" },
    { name: "Rodrigo Martins", email: "rodrigo@gmail.com", cpf: "345.876.901-22", papel: "Gerente", sector: "Compras" },
    { name: "Sofia Dias", email: "sofia@gmail.com", cpf: "456.987.012-33", papel: "Usuário", sector: "TI" },
    { name: "Eduardo Souza", email: "eduardo@gmail.com", cpf: "567.098.123-44", papel: "Supervisor", sector: "Marketing" },
    { name: "Bruna Azevedo", email: "bruna@gmail.com", cpf: "678.109.234-55", papel: "Usuário", sector: "Financeiro" },
    { name: "Felipe Nunes", email: "felipe@gmail.com", cpf: "789.210.345-66", papel: "Administrador", sector: "TI" },
    { name: "Letícia Silva", email: "leticia@gmail.com", cpf: "890.321.456-77", papel: "Usuário", sector: "Marketing" },
    { name: "Gabriel Oliveira", email: "gabriel@gmail.com", cpf: "901.432.567-88", papel: "Gerente", sector: "Compras" },
    { name: "Camila Pereira", email: "camila@gmail.com", cpf: "012.543.678-99", papel: "Usuário", sector: "TI" },
    { name: "Ricardo Lima", email: "ricardo@gmail.com", cpf: "123.654.789-11", papel: "Supervisor", sector: "Vendas" },
    { name: "Tatiana Fernandes", email: "tatiana@gmail.com", cpf: "234.765.890-22", papel: "Usuário", sector: "Financeiro" },
    { name: "Thiago Ribeiro", email: "thiago@gmail.com", cpf: "345.876.901-33", papel: "Administrador", sector: "Marketing" },
    { name: "Elaine Costa", email: "elaine@gmail.com", cpf: "456.987.012-44", papel: "Usuário", sector: "TI" },
    { name: "Marcelo Ferreira", email: "marcelo@gmail.com", cpf: "567.098.123-55", papel: "Gerente", sector: "Recursos Humanos" },
    { name: "Patrícia Rocha", email: "patricia@gmail.com", cpf: "678.109.234-66", papel: "Usuário", sector: "Compras" },
    { name: "Daniel Cardoso", email: "daniel@gmail.com", cpf: "789.210.345-77", papel: "Supervisor", sector: "TI" },
    { name: "Aline Mendes", email: "aline@gmail.com", cpf: "890.321.456-88", papel: "Usuário", sector: "Financeiro" },
    { name: "Henrique Souza", email: "henrique@gmail.com", cpf: "901.432.567-99", papel: "Administrador", sector: "Marketing" },
    { name: "Isabela Silva", email: "isabela@gmail.com", cpf: "012.543.678-00", papel: "Usuário", sector: "Vendas" },
    { name: "Vitor Almeida", email: "vitor@gmail.com", cpf: "123.654.789-22", papel: "Gerente", sector: "TI" },
    { name: "Larissa Santos", email: "larissa@gmail.com", cpf: "234.765.890-33", papel: "Usuário", sector: "Recursos Humanos" },
    { name: "Diego Martins", email: "diego@gmail.com", cpf: "345.876.901-44", papel: "Supervisor", sector: "Compras" },
    { name: "Carla Fernandes", email: "carla@gmail.com", cpf: "456.987.012-55", papel: "Usuário", sector: "TI" },
    { name: "Vinicius Oliveira", email: "vinicius@gmail.com", cpf: "567.098.123-66", papel: "Administrador", sector: "Marketing" },
    { name: "Gabriela Lima", email: "gabriela@gmail.com", cpf: "678.109.234-77", papel: "Usuário", sector: "Financeiro" },
    { name: "Fábio Mendes", email: "fabio@gmail.com", cpf: "789.210.345-88", papel: "Gerente", sector: "Vendas" },
    { name: "Clarice Silva", email: "clarice@gmail.com", cpf: "890.321.456-99", papel: "Usuário", sector: "TI" },
    { name: "Renato Pereira", email: "renato@gmail.com", cpf: "901.432.567-11", papel: "Supervisor", sector: "Recursos Humanos" },
    { name: "Jéssica Souza", email: "jessica@gmail.com", cpf: "012.543.678-22", papel: "Usuário", sector: "Compras" },
    { name: "Murilo Cardoso", email: "murilo@gmail.com", cpf: "123.654.789-33", papel: "Administrador", sector: "TI" },
    { name: "Nathalia Oliveira", email: "nathalia@gmail.com", cpf: "234.765.890-44", papel: "Usuário", sector: "Marketing" },
    { name: "Alessandro Dias", email: "alessandro@gmail.com", cpf: "345.876.901-55", papel: "Gerente", sector: "Financeiro" },
    { name: "Fernanda Costa", email: "fernanda@gmail.com", cpf: "456.987.012-66", papel: "Usuário", sector: "TI" },
    { name: "Marcos Souza", email: "marcos@gmail.com", cpf: "567.098.123-77", papel: "Supervisor", sector: "Vendas" },
    { name: "Alice Lima", email: "alice@gmail.com", cpf: "678.109.234-88", papel: "Usuário", sector: "Compras" },
    { name: "Leandro Silva", email: "leandro@gmail.com", cpf: "789.210.345-99", papel: "Administrador", sector: "Marketing" },
    { name: "Paula Mendes", email: "paula@gmail.com", cpf: "890.321.456-00", papel: "Usuário", sector: "Recursos Humanos" },
    { name: "André Oliveira", email: "andre@gmail.com", cpf: "901.432.567-22", papel: "Gerente", sector: "TI" },
    { name: "Simone Souza", email: "simone@gmail.com", cpf: "012.543.678-33", papel: "Usuário", sector: "Vendas" },
    { name: "Gustavo Cardoso", email: "gustavo@gmail.com", cpf: "123.654.789-44", papel: "Supervisor", sector: "Financeiro" },
    { name: "Roberta Santos", email: "roberta@gmail.com", cpf: "234.765.890-55", papel: "Usuário", sector: "TI" },
    { name: "Bruno Lima", email: "bruno@gmail.com", cpf: "345.876.901-66", papel: "Administrador", sector: "Compras" },
    { name: "Patrícia Costa", email: "patricia@gmail.com", cpf: "456.987.012-77", papel: "Usuário", sector: "Marketing" },
    { name: "Ronaldo Souza", email: "ronaldo@gmail.com", cpf: "567.098.123-88", papel: "Gerente", sector: "Recursos Humanos" },
    { name: "Débora Oliveira", email: "debora@gmail.com", cpf: "678.109.234-99", papel: "Usuário", sector: "TI" },
    { name: "Felipe Silva", email: "felipe@gmail.com", cpf: "789.210.345-11", papel: "Supervisor", sector: "Vendas" },
    { name: "Amanda Pereira", email: "amanda@gmail.com", cpf: "890.321.456-22", papel: "Usuário", sector: "Compras" },
    { name: "César Almeida", email: "cesar@gmail.com", cpf: "901.432.567-33", papel: "Administrador", sector: "Financeiro" },
    { name: "Lorena Martins", email: "lorena@gmail.com", cpf: "012.543.678-44", papel: "Usuário", sector: "Marketing" },
    { name: "Joana Azevedo", email: "joana@gmail.com", cpf: "123.654.789-55", papel: "Usuário", sector: "TI" },
];


export function UsuariosModule() {
    const userRepo = new UsersRepository()
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    // const [data, setData] = useState([])
    const itemsPerPage = 10;

    const filteredData = data.filter((item) => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.cpf.includes(searchTerm) ||
        item.papel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.sector.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const currentData = filteredData.slice(
        (currentPage - 1) * itemsPerPage, 
        currentPage * itemsPerPage
    );

    const renderPagination = () => {
        const pages = [];

        pages.push(
            <button key={1} onClick={() => setCurrentPage(1)} className={`px-2 border-[1px] border-prime-blue rounded-lg text-prime-orange ${currentPage === 1 ? "font-bold" : ""}`}>
                1
            </button>
        );

        if (currentPage > 3) {
            pages.push(<span key="first-dots">...</span>);
        }

        const startPage = Math.max(2, currentPage - 1);
        const endPage = Math.min(totalPages - 1, currentPage + 1);

        for (let i = startPage; i <= endPage; i++) {
            pages.push(
                <button 
                    key={i} 
                    onClick={() => setCurrentPage(i)} 
                    className={`px-2 border-[1px] border-prime-blue rounded-lg text-prime-orange ${i === currentPage ? "font-bold" : ""}`}
                >
                    {i}
                </button>
            );
        }

        if (currentPage < totalPages - 2) {
            pages.push(<span key="last-dots">...</span>);
        }

        if (totalPages > 2) {
            pages.push(
                <button key={totalPages} onClick={() => setCurrentPage(totalPages)} className={`px-2 border-[1px] border-prime-blue rounded-lg text-prime-orange ${currentPage === totalPages ? "font-bold" : ""}`}>
                    {totalPages}
                </button>
            );
        }

        return pages;
    };

    async function getAllUsers() {
        const response = await userRepo.getAllUsers()
        console.log(response.data)
        // setData(response.data)
    }

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <section className="w-5/6 bg-[rgba(255,255,255,0.5)] rounded-[48px] p-8 flex flex-col max-lg:w-full">
            <HeaderAdmin>
                <i className="fa-regular fa-user text-4xl text-prime-orange max-sm:text-2xl"></i>
                <h1 className="uppercase text-4xl text-prime-blue max-md:text-2xl">Usuários</h1>
            </HeaderAdmin>
            <div className="flex items-center gap-2 my-2">
                <input 
                    className="border-2 border-prime-blue rounded-full p-2" 
                    placeholder="Procurar" 
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <i className="fa-solid fa-magnifying-glass text-xl"></i>
            </div>
            <div className="overflow-x-auto">
                <header className="flex items-center px-4 font-bold text-prime-blue min-w-[600px]">
                    <span className="w-1/5 whitespace-nowrap">Nome</span>
                    <span className="w-1/5 whitespace-nowrap">E-mail</span>
                    <span className="w-1/5 whitespace-nowrap">CPF</span>
                    <span className="w-1/5 whitespace-nowrap">Papel</span>
                    <span className="w-1/5 whitespace-nowrap">Setor</span>
                </header>
                {currentData.length > 0 ? (
                    currentData.map((item, index) => (
                        <div 
                            key={index} 
                            className={`flex items-center justify-between border-[1px] border-prime-blue p-4 min-w-[600px] ${index === 0 ? "rounded-t-lg" : index === (currentData.length - 1) ? "rounded-b-lg" : ""}`}>
                            <span className="lg:w-1/5 whitespace-nowrap">{item.name}</span>
                            <span className="lg:w-1/5 whitespace-nowrap">{item.email}</span>
                            <span className="lg:w-1/5 whitespace-nowrap">{item.cpf}</span>
                            <span className="lg:w-1/5 whitespace-nowrap">{item.papel}</span>
                            <span className="lg:w-1/5 whitespace-nowrap">{item.sector}</span>
                        </div>
                    ))
                ) : (
                    <div className="text-center p-4">Nenhum resultado encontrado.</div>
                )}
            </div>
            <div className="flex items-center justify-between gap-2 mt-4">
                <span>
                    Exibindo {Math.min(currentPage * itemsPerPage, filteredData.length)} de {filteredData.length} resultados
                </span>
                <div className="flex gap-2">
                    {renderPagination()}
                </div>
            </div>
        </section>
    );
}
