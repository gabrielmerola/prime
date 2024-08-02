import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

const button = tv({
    base: "text-white py-2 px-4 rounded-full",
    variants: {
        color: {
            default: "bg-prime-orange duration-200 hover:bg-orange-500",
            blue: 'bg-prime-blue',
            blue_light: 'bg-blue-700 duration-200 hover:bg-blue-800',
        },
        font: {
            bold: 'font-bold',
            normal: 'font-normal'
        } 
    },
    defaultVariants: {
        color: 'default',
        font: 'normal'
    }
})

export type ButtonProps = ComponentProps<'a'> & VariantProps<typeof button>

export function Button({ color, font, ...props } : ButtonProps) {
    return (
        <a
            className={button({ color, font })}
            {...props}
        >
            {props.children}
        </a>
    )
}