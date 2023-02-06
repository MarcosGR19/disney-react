import axios from "axios"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigator from "../../shared/Navigator/Navigator";

import "./CharacterPage.scss"

export default function CharacterPage(){

    const [character, setCharacter] = useState(['']);

    const {id} = useParams();

    useEffect(()=> 
        {
            getCharacter();
        }
    ,[])

    const getCharacter= async()=>{
        const res = await axios.get(`https://api.disneyapi.dev/characters/${id}`);
        console.log(res.data)
        setCharacter(res.data);
        // console.log(res.data.data);
    }

    return (
        <div className="c-character-page">
            <Navigator></Navigator>
            <div className="c-character-info">
                <h3>{character.name}</h3>
                <img alt="character" src={character.imageUrl}></img>
                
                <div className="films-cont">
                    <h4>Films</h4>
                    <ul>{character.films?.map((item,index)=><li key={index}>{item}</li>)}</ul>
                </div>
                
                <div className="tv-shows-cont">
                    <h4>TV Shows</h4>
                    <ul>{character.tvShows?.map((item,index)=><li key={index}>{item}</li>)}</ul>
                </div>
            </div>
        </div>
    )
}