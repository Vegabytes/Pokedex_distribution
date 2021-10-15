import { Pokecard } from './Pokecard'
import './Pokedex.css'


const Pokedex = ({ pokemons, exp, isWinner }) => {
    let title = <h1 className={isWinner ? 'Pokedex-winner' : 'Pokedex-loser'}>{isWinner ? 'Winning hand' : 'Losing Hand'}</h1>
    return (
        <div className='Pokedex'>
            {title}
            <h4>Total experience: {exp}</h4>
            <div className='Pokedex-list'>
                {pokemons.map(({ id, name, type, base_experience }) => {
                    return <Pokecard key={id} name={name} type={type} base_experience={base_experience} id={id} />
                })}
            </div>
        </div>
    )
}

export default Pokedex;