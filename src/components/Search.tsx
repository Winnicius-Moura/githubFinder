import { MagnifyingGlass} from 'phosphor-react'
import { useState, KeyboardEvent } from 'react'
import { Input } from './Input'

type SearchProps = {
    loadUser: (userName: string) => Promise<void>
}

export const Search = ({loadUser}: SearchProps) => {

    const [userName, setUserName] = useState('')

    const handleKeyDown = (event:KeyboardEvent) => {
        if(event.key === "Enter"){
            loadUser(userName)
        }
    }

    return <>
        <div className='flex flex-col justify-center text-center gap-4 rounded-2xl bg-sky-700 mb-8'>
            <h2 className='mt-2 text-lg'>Busque por um usuário: </h2>
            <p>Conheça seus melhores repoisitórios.</p>
            <div className='relative'>
                <Input placeholder='Digite o nome do usuário' type={'text'} 
                    onChange={(event) => setUserName(event.target.value)}
                    onKeyDown={handleKeyDown}
                    />
                <span className='absolute inset-y-0 right-0 grid w-10 place-content-center'>
                    <button onClick={() => loadUser(userName)}>
                        <MagnifyingGlass  size={20}/>
                    </button>
                </span>
            </div>
        </div>
    </>
}