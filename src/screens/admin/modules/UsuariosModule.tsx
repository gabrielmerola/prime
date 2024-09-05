import { useState } from "react";
import { HeaderAdmin } from "../../../components/HeaderAdmin";

const data = [
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Jorge',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
    {
        'name': 'Gabriel',
        'email': 'gabriel@gmail.com',
        'cpf': '123.456.798-10',
        'papel': 'administrador',
        'sector': 'Prime Estágios'
    },
]

export function UsuariosModule() {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
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
        
        // if (totalPages > 1) {
        //     pages.push(
        //         <button key={2} onClick={() => setCurrentPage(2)} className={`px-2 border-[1px] border-prime-blue rounded-lg text-prime-orange ${currentPage === 2 ? "font-bold" : ""}`}>
        //             2
        //         </button>
        //     );
        // }

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
