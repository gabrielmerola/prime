import { useState } from "react";
import { HeaderAdmin } from "../../../components/HeaderAdmin";

const data = [
    { name: "João da Silva", cnpj: "12.345.678/0001-00", usuarios: 15, estagiarios: 5, vagas: 3 },
    { name: "Maria Oliveira", cnpj: "23.456.789/0001-11", usuarios: 20, estagiarios: 8, vagas: 2 },
    { name: "Carlos Souza", cnpj: "34.567.890/0001-22", usuarios: 30, estagiarios: 10, vagas: 5 },
    { name: "Ana Pereira", cnpj: "45.678.901/0001-33", usuarios: 25, estagiarios: 7, vagas: 4 },
    { name: "Pedro Costa", cnpj: "56.789.012/0001-44", usuarios: 40, estagiarios: 12, vagas: 6 },
    { name: "Fernanda Lima", cnpj: "67.890.123/0001-55", usuarios: 50, estagiarios: 15, vagas: 3 },
    { name: "Rafael Almeida", cnpj: "78.901.234/0001-66", usuarios: 35, estagiarios: 9, vagas: 2 },
    { name: "Juliana Cardoso", cnpj: "89.012.345/0001-77", usuarios: 18, estagiarios: 6, vagas: 3 },
    { name: "Lucas Mendes", cnpj: "90.123.456/0001-88", usuarios: 22, estagiarios: 8, vagas: 1 },
    { name: "Beatriz Santos", cnpj: "01.234.567/0001-99", usuarios: 27, estagiarios: 11, vagas: 4 },
    { name: "Paulo Barbosa", cnpj: "12.345.678/0002-00", usuarios: 13, estagiarios: 4, vagas: 2 },
    { name: "Mariana Rodrigues", cnpj: "23.456.789/0002-11", usuarios: 45, estagiarios: 16, vagas: 7 },
    { name: "Rodrigo Martins", cnpj: "34.567.890/0002-22", usuarios: 32, estagiarios: 9, vagas: 5 },
    { name: "Sofia Dias", cnpj: "45.678.901/0002-33", usuarios: 10, estagiarios: 3, vagas: 2 },
    { name: "Eduardo Souza", cnpj: "56.789.012/0002-44", usuarios: 50, estagiarios: 20, vagas: 6 },
    { name: "Bruna Azevedo", cnpj: "67.890.123/0002-55", usuarios: 22, estagiarios: 6, vagas: 3 },
    { name: "Felipe Nunes", cnpj: "78.901.234/0002-66", usuarios: 37, estagiarios: 12, vagas: 5 },
    { name: "Letícia Silva", cnpj: "89.012.345/0002-77", usuarios: 12, estagiarios: 4, vagas: 2 },
    { name: "Gabriel Oliveira", cnpj: "90.123.456/0002-88", usuarios: 28, estagiarios: 8, vagas: 4 },
    { name: "Camila Pereira", cnpj: "01.234.567/0002-99", usuarios: 16, estagiarios: 5, vagas: 2 },
    { name: "Ricardo Lima", cnpj: "12.345.678/0003-00", usuarios: 45, estagiarios: 14, vagas: 6 },
    { name: "Tatiana Fernandes", cnpj: "23.456.789/0003-11", usuarios: 20, estagiarios: 6, vagas: 2 },
    { name: "Thiago Ribeiro", cnpj: "34.567.890/0003-22", usuarios: 38, estagiarios: 10, vagas: 5 },
    { name: "Elaine Costa", cnpj: "45.678.901/0003-33", usuarios: 17, estagiarios: 5, vagas: 3 },
    { name: "Marcelo Ferreira", cnpj: "56.789.012/0003-44", usuarios: 40, estagiarios: 12, vagas: 4 },
    { name: "Patrícia Rocha", cnpj: "67.890.123/0003-55", usuarios: 30, estagiarios: 10, vagas: 5 },
    { name: "Daniel Cardoso", cnpj: "78.901.234/0003-66", usuarios: 50, estagiarios: 16, vagas: 6 },
    { name: "Aline Mendes", cnpj: "89.012.345/0003-77", usuarios: 15, estagiarios: 5, vagas: 3 },
    { name: "Henrique Souza", cnpj: "90.123.456/0003-88", usuarios: 23, estagiarios: 7, vagas: 2 },
    { name: "Isabela Silva", cnpj: "01.234.567/0003-99", usuarios: 18, estagiarios: 6, vagas: 3 },
    { name: "Vitor Almeida", cnpj: "12.345.678/0004-00", usuarios: 35, estagiarios: 11, vagas: 5 },
    { name: "Larissa Santos", cnpj: "23.456.789/0004-11", usuarios: 10, estagiarios: 3, vagas: 1 },
    { name: "Diego Martins", cnpj: "34.567.890/0004-22", usuarios: 47, estagiarios: 15, vagas: 6 },
    { name: "Carla Fernandes", cnpj: "45.678.901/0004-33", usuarios: 29, estagiarios: 9, vagas: 3 },
    { name: "Vinicius Oliveira", cnpj: "56.789.012/0004-44", usuarios: 42, estagiarios: 13, vagas: 4 },
    { name: "Gabriela Lima", cnpj: "67.890.123/0004-55", usuarios: 22, estagiarios: 7, vagas: 2 },
    { name: "Fábio Mendes", cnpj: "78.901.234/0004-66", usuarios: 53, estagiarios: 17, vagas: 6 },
    { name: "Clarice Silva", cnpj: "89.012.345/0004-77", usuarios: 18, estagiarios: 5, vagas: 3 },
    { name: "Renato Pereira", cnpj: "90.123.456/0004-88", usuarios: 37, estagiarios: 11, vagas: 4 },
    { name: "Jéssica Souza", cnpj: "01.234.567/0004-99", usuarios: 25, estagiarios: 8, vagas: 3 },
    { name: "Murilo Cardoso", cnpj: "12.345.678/0005-00", usuarios: 31, estagiarios: 10, vagas: 5 },
    { name: "Nathalia Oliveira", cnpj: "23.456.789/0005-11", usuarios: 14, estagiarios: 5, vagas: 2 },
    { name: "Alessandro Dias", cnpj: "34.567.890/0005-22", usuarios: 47, estagiarios: 16, vagas: 6 },
    { name: "Fernanda Costa", cnpj: "45.678.901/0005-33", usuarios: 22, estagiarios: 7, vagas: 3 },
    { name: "Marcos Souza", cnpj: "56.789.012/0005-44", usuarios: 41, estagiarios: 13, vagas: 5 },
    { name: "Alice Lima", cnpj: "67.890.123/0005-55", usuarios: 36, estagiarios: 12, vagas: 4 },
    { name: "Leandro Silva", cnpj: "78.901.234/0005-66", usuarios: 23, estagiarios: 7, vagas: 3 },
    { name: "Paula Mendes", cnpj: "89.012.345/0005-77", usuarios: 15, estagiarios: 5, vagas: 2 },
    { name: "André Oliveira", cnpj: "90.123.456/0005-88", usuarios: 44, estagiarios: 14, vagas: 5 },
    { name: "Simone Souza", cnpj: "01.234.567/0005-99", usuarios: 20, estagiarios: 6, vagas: 3 },
    { name: "Gustavo Cardoso", cnpj: "12.345.678/0006-00", usuarios: 30, estagiarios: 10, vagas: 4 },
    { name: "Roberta Santos", cnpj: "23.456.789/0006-11", usuarios: 11, estagiarios: 3, vagas: 1 },
    { name: "Bruno Lima", cnpj: "34.567.890/0006-22", usuarios: 28, estagiarios: 9, vagas: 3 },
    { name: "Patrícia Costa", cnpj: "45.678.901/0006-33", usuarios: 37, estagiarios: 12, vagas: 5 },
    { name: "Ronaldo Souza", cnpj: "56.789.012/0006-44", usuarios: 42, estagiarios: 14, vagas: 6 },
    { name: "Débora Oliveira", cnpj: "67.890.123/0006-55", usuarios: 19, estagiarios: 6, vagas: 2 },
    { name: "Felipe Silva", cnpj: "78.901.234/0006-66", usuarios: 26, estagiarios: 8, vagas: 3 },
    { name: "Amanda Pereira", cnpj: "89.012.345/0006-77", usuarios: 34, estagiarios: 11, vagas: 4 },
    { name: "César Almeida", cnpj: "90.123.456/0006-88", usuarios: 39, estagiarios: 13, vagas: 5 },
    { name: "Lorena Martins", cnpj: "01.234.567/0006-99", usuarios: 45, estagiarios: 15, vagas: 6 },
    { name: "Joana Azevedo", cnpj: "12.345.678/0007-00", usuarios: 14, estagiarios: 4, vagas: 2 }
];


export function EmpresasModule() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const filteredData = data.filter((item) => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.cnpj.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.usuarios.toString().includes(searchTerm) ||
        item.estagiarios.toString().includes(searchTerm) ||
        item.vagas.toString().includes(searchTerm)
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

    return (
        <section className="w-5/6 bg-[rgba(255,255,255,0.5)] rounded-[48px] p-8 flex flex-col max-lg:w-full">
            <HeaderAdmin>
                <i className="fa-regular fa-building text-4xl text-prime-orange max-sm:text-2xl"></i>
                <h1 className="uppercase text-4xl text-prime-blue max-md:text-2xl">Empresas</h1>
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
                    <span className="w-1/6 whitespace-nowrap">Nome</span>
                    <span className="w-1/6 whitespace-nowrap">CNPJ</span>
                    <span className="w-1/6 whitespace-nowrap">Usuários</span>
                    <span className="w-1/6 whitespace-nowrap">Estagiários</span>
                    <span className="w-1/6 whitespace-nowrap">Vagas</span>
                </header>
                {currentData.length > 0 ? (
                    currentData.map((item, index) => (
                        <div 
                            key={index} 
                            className={`flex items-center justify-between border-[1px] border-prime-blue p-4 min-w-[600px] ${index === 0 ? "rounded-t-lg" : index === (currentData.length - 1) ? "rounded-b-lg" : ""}`}>
                            <span className="lg:w-1/6 whitespace-nowrap">{item.name}</span>
                            <span className="lg:w-1/6 whitespace-nowrap">{item.cnpj}</span>
                            <span className="lg:w-1/6 whitespace-nowrap">{item.usuarios}</span>
                            <span className="lg:w-1/6 whitespace-nowrap">{item.estagiarios}</span>
                                <div className="lg:w-1/6">
                                    <div className="flex items-center justify-center gap-2 px-2 bg-prime-orange w-12 rounded-full">
                                        <div className="bg-orange-700 h-2 w-2 rounded-full"/>
                                        <span className="">{item.vagas}</span>
                                    </div>
                                </div>
                            <div className="lg:w-1/6 flex gap-4 items-center justify-evenly">
                                <i className="text-xl cursor-pointer fa-solid fa-user"></i>
                                <i className="text-xl cursor-pointer fa-solid fa-graduation-cap"></i>
                                <i className="text-xl cursor-pointer fa-solid fa-briefcase"></i>
                            </div>
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
