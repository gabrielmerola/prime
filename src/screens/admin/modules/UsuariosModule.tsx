import { useEffect, useState } from "react";
import { HeaderAdmin } from "../../../components/HeaderAdmin";
import { UsersRepository } from "../../../api/repositories/users_repository";

export function UsuariosModule() {
    const userRepo = new UsersRepository();
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [totalData, setTotalData] = useState(0);
    const itemsPerPage = 10;
    const localPageLimit = 4;

    const filteredData = data.filter((item:any) => {
        const name = item.name ? item.name.toLowerCase() : '';
        const email = item.email ? item.email.toLowerCase() : '';
        const cpf = item.cpf ? item.cpf : '';
        const papel = item.papel ? item.papel.toLowerCase() : '';
        const sector = item.sector ? item.sector.toLowerCase() : '';

        const searchLower = searchTerm.toLowerCase();

        return name.includes(searchLower) ||
            email.includes(searchLower) ||
            cpf.includes(searchLower) ||
            papel.includes(searchLower) ||
            sector.includes(searchLower);
    });
    const paginatedData = data.slice(
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

    async function getUsersByPage(page: number) {
        const serverPage = Math.ceil(page / localPageLimit);
        
        await userRepo.getAllUsers(serverPage).then((response) => {
            console.log(response)
            setTotalData(response.total);
            setTotalPages(Math.ceil(response.total / itemsPerPage));
            setData((prevData):any => {
                const newItems = response.data.filter((newItem: any) => 
                    !prevData.some((exist: any) => exist.name === newItem.name)
                );

                return [...prevData, ...newItems];
            });
        });
    }
    

    useEffect(() => {
        if ((currentPage - 1) % localPageLimit === 0 || currentPage === 1) {
            getUsersByPage(currentPage);
        }
    }, [currentPage]);

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
                    <span className="w-1/5 whitespace-nowrap">Usuário</span>
                    <span className="w-1/5 whitespace-nowrap">Setor</span>
                </header>
                {paginatedData.length > 0 ? (
                    paginatedData.map((item: any, index: any) => (
                        <div 
                            key={index} 
                            className={`flex items-center justify-between gap-4 border-[1px] border-prime-blue p-4 min-w-[600px] ${index === 0 ? "rounded-t-lg" : index === (paginatedData.length - 1) ? "rounded-b-lg" : ""}`}>
                            <span className="w-1/5 whitespace-nowrap overflow-hidden text-ellipsis">{item.name}</span>
                            <span className="w-1/5 whitespace-nowrap overflow-hidden text-ellipsis">{item.email}</span>
                            <span className="w-1/5 whitespace-nowrap overflow-hidden text-ellipsis">{item.cpf}</span>
                            <span className="w-1/5 whitespace-nowrap overflow-hidden text-ellipsis">{item.role == "student" ? "Estudante" : item.role == "company" ? "Empresa" : item.role == "institution" ? "Instituição" : item.role == "admin" ? "Administrador" : item.role}</span>
                            <span className="w-1/5 whitespace-nowrap overflow-hidden text-ellipsis">{"sem setor"}</span>
                        </div>
                    ))
                ) : (
                    <div className="text-center p-4"><i className="fa-solid fa-spinner animate-spin text-4xl"></i></div>
                )}
            </div>
            <div className="flex items-center justify-between gap-2 mt-4">
                <span>
                    Exibindo {Math.min(currentPage * itemsPerPage, filteredData.length)} de {totalData} resultados
                </span>
                <div className="flex gap-2">
                    {renderPagination()}
                </div>
            </div>
        </section>
    );
}
