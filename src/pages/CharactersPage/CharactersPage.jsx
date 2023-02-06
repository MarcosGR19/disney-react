import axios from "axios"
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CharactersGallery from "./CharacterGallery/CharacterGallery";
import Paginator from "./Paginator/Paginator";

import "./CharactersPage.scss"
import Navigator from "../../shared/Navigator/Navigator";

export default function CharactersPage(){

    const [characters, setCharacters] = useState(['']);

    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(()=> 
        {
            let page = searchParams.get("page");
            if(!page){
                page = 1;
            }
            getCharacters(page);
        }
    ,[])

    const getCharacters= async(page)=>{
        //Put pages in url
        setSearchParams({
            page:page
        });
        //Get characters
        const res = await axios.get(`https://api.disneyapi.dev/characters?page=${page}`);
        setCharacters(res.data.data);
        // console.log(res.data.data);
    }

    return (
        <div className="c-characters-page">
            <Navigator></Navigator>
            <Paginator onChange={getCharacters}/>
            <CharactersGallery characters={characters}/>
        </div>
    )
}