import { Link } from "react-router-dom";

import "./Navigator.scss"

export default function Navigator(){

    return (
        <div className="s-navigator">
            <Link to="/">Home</Link>
            <Link to="/characters">Characters</Link>
        </div>
    )
}