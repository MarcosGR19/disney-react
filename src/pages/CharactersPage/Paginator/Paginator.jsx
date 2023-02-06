import { useSearchParams } from "react-router-dom";
import "./Paginator.scss"

export default function Paginator({onChange}){

    //Obtain page from Search Params
    const [searchParams] = useSearchParams();
    const page = parseInt(searchParams.get('page'));

    const addPage = () => {
        onChange(page + 1);
    }

    const minusPage = () => {
        onChange(page - 1);
    }

    return (
        <div className="c-paginator">
            <div>
                <button onClick={addPage}>+</button>
                {page !==1 && <button onClick={minusPage}>-</button>}
            </div>
            <h4>{page}</h4>
        </div>  
    )
}