import "./CharacterCard.scss"

export default function CharactersCard({character}){

    return (
        <div className="c-character-card">
            <p>{character.name}</p>
            <div className="img-cont">
                <img alt="char-img" src={character.imageUrl}></img>
            </div>
        </div>
    );
}