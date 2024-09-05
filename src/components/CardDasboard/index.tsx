export function CardDashboard({title, value, description} : {title: string, value: string, description: string}) {
    return (
        <div className={`flex flex-col justify-between bg-gray-100 rounded-[24px] p-8 shadow-md border-2 border-black text-prime-blue duration-300 cursor-pointer hover:shadow-2xl hover:scale-105 hover:bg-gradient-to-l hover:to-[#01144b] hover:to-[50%] hover:from-[#1238a8] hover:text-white`}>
            <h2 className="font-semibold text-3xl mb-2">{title}</h2>
            <p className="text-prime-orange text-6xl ml-8">{value}</p>
            <p className="flex items-center justify-end gap-2">{description}<i className="fa-solid fa-chevron-right text-prime-orange"></i></p>
        </div>
    )
}