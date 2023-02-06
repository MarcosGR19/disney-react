import { Link } from "react-router-dom";
import CharactersCard from "./CharacterCard/CharacterCard";

import "./CharacterGallery.scss";

export default function CharactersGallery({characters}){

    return (
        <ul className="c-character-gallery">
            {characters.map((character, index)=>(
                <Link key={index} to={`./${character._id}`}>
                    <li>
                        <CharactersCard character={character}/>
                    </li>
                </Link>
            ))}
        </ul>
    )
}