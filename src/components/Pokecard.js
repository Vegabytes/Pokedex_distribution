//Single pokemos with name, image and type
import './Pokecard.css'


const pad = (num, size) => {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
}

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

export const Pokecard = ({ id: idPokemon, name, type, base_experience }) => {
    const id = pad(idPokemon, 3);
    const imgSrc = `${POKE_API}${id}.png`;
    return (
        <div className='Pokecard'>
            <h1 className='Pokecard-title'>{name}</h1>
            <div className='Pokecard-img' >
                <img src={imgSrc} alt={name} />
            </div>
            <div className="Pokecard-data">Type: {type}</div>
            <div className="Pokecard-data">Exp: {base_experience}</div>
        </div>
    )
}