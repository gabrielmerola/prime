export function CardDicas({ item, index }: any) {
    return (
        <div className="p-4" key={index}>
            <div className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer duration-300 hover:scale-105">
                <div className='w-full h-40 overflow-hidden'>
                    <img className="object-cover" src={item.img} alt={item.title} />
                </div>
                <div className="p-4 min-h-52 flex flex-col items-start gap-4">
                    <h3 className="text-lg text-prime-blue duration-500 hover:text-prime-orange font-bold">{item.title}</h3>
                    <p className="text-[10px] text-prime-blue">{item.description}</p>
                    <button type="button" className="bg-prime-orange text-white px-2 hover:bg-orange-400">Leia Mais</button>
                </div>
            </div>
        </div>
    )
}