import { PropsWithChildren } from "react";

export function HeaderAdmin({ children } : PropsWithChildren) {
    return (
        <>
            <nav className="flex items-center justify-end gap-8">
                <i className="fa-solid fa-bell text-4xl text-prime-orange max-sm:text-2xl"></i>
                <i className="fa-regular fa-user text-4xl max-sm:text-2xl text-prime-orange bg-prime-blue px-3 py-2 rounded-full"></i>
            </nav>
            <div className="flex items-center gap-4">
                {children}
            </div>
        </>
    )
}