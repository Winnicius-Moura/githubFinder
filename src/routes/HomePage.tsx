import { useState } from "react"
import { ListRepos } from "../components/ListRepos"
import { Search } from "../components/Search"
import { UserComponent } from "../components/UserComponent"
import { UserProps } from "../types/user"


export const HomePage = () => {
    const [user, setUser] = useState<UserProps | null>(null)

    const loadUser = async (userName: string) => {

        const result = await fetch(`https://api.github.com/users/${userName}`)
        const data = await result.json()
        const { avatar_url, login, location, followers, following} = data
        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
        }

        setUser(userData)
    }

    return <>
        <div className="text-center">
            <Search loadUser={loadUser} />
            {user && <UserComponent {...user}/>}
            {/* <ListRepos /> */}
        </div>

    </>
}