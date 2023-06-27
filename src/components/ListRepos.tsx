import axios from 'axios'
import { useQuery} from 'react-query'

type Repository = {
    full_name: string,
    description: string,
}

export const ListRepos = () => {

    const { data, isFetching } = useQuery<Repository[]>('repos', async () => {
        const response = await axios.get('https://api.github.com/users/winnicius-moura/repos')

        return response.data
    })

    return <>
        <ul>
            {isFetching && <p>Loading...</p>}
            {data?.map(repo => {
                return (
                    <li className='text-slate-300 text-center' key={repo.full_name}>
                        <strong>{repo.full_name}</strong>
                        <p>{repo.description}</p>
                    </li>
                )
            })}

        </ul>
    </>


}