import { MagnifyingGlass } from "phosphor-react"
import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}


export function Input(props: InputProps){
    return (
        <input 
            {...props} 
            className='bg-zinc-500 py-3 px-4 rounded-b-lg text-sm placeholder:text-zinc-400 w-full' 
        />
    )
}