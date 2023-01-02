import { UserProps } from "../types/user";
import { MapPin } from 'phosphor-react'
import { Link } from "react-router-dom";
export const UserComponent = ({
    login,
    avatar_url,
    followers,
    following,
    location,
}: UserProps) => {
    return <>
        <div>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            <p>
                <MapPin />
                <span>{location}</span>
            </p>
            <div>
                <p>Seguidores:</p>
                <p>{followers}</p>
            </div>

            <div>
                <p>Seguindo:</p>
                <p>{following}</p>
            </div>

            <Link to={`/repos/`} className='text-blue-500'> Ver melhores projetos</Link>
        </div>
    </>
}