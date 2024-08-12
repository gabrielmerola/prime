import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

const card = tv({
    base: "flex justify-center items-center gap-8 p-12 max-md:flex-col-reverse",
    variants: {
        imagem: {
            direita: "flex-row",
            esquerda: "flex-row-reverse",
        },
        corFundo: {
            branco: "",
            cinza: "bg-gray-200"
        }
    },
    defaultVariants: {
        imagem: 'direita',
        corFundo: 'branco'
    }
})

export type CardApresentacaoProps = ComponentProps<'section'> & VariantProps<typeof card> & {
    titulo: string
    url: string
}

export function CardApresentacao({ titulo, url, imagem, corFundo, ...props } : CardApresentacaoProps) {
    return (
        <section className={card({imagem, corFundo})}>
            <div className="w-1/3 flex flex-col gap-4 max-md:w-full">
                <h2 className="border-b-4 border-prime-orange text-3xl pb-4 text-prime-blue">{titulo}</h2>
                {props.children}
            </div>
            <div className="bg-green-500 w-1/3 h-72 overflow-hidden max-md:w-full">
                <img className="w-full h-full object-cover object-center" src={url} alt={`Imagem ${titulo}`} />
            </div>
        </section>
    )
}