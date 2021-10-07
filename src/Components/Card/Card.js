import React, {useEffect, useState} from "react";
import './Card.css'
import axios from "axios";

//card: name, sprite, nr of moves, weight, list of abilities

function Card(url) {

//state
    const [pokemon, setPokemon] = useState(null);

//fetch single pokemon
    useEffect(() => {
            async function fetchData() {
                try {
                    const result = await axios.get(url);
                    console.log(result.data);
                    setPokemon(result.data)
                } catch (e) {
                    console.error(e);
                }
            };
            //call the function
            if (url) {
                fetchData();
            }

        }, [url]
    )

    return ( <div>
                {pokemon ? <div className="cardContainer">
                    <h3>{pokemon.name}</h3>
                    <h3><img src={pokemon.sprites.front_default}
                             alt="sprite"/>
                    </h3>
                    <h3>{pokemon.moves.length}</h3>
                    <h3>{pokemon.weight}</h3>
                    <h3>{pokemon.abilities.map((ability) => {
                        return <ul key={ability.slot}>
                                    <li>{ability.ability.name}</li>
                                </ul>
                    })}
                    </h3>
                </div> : <h3>loading</h3>
                }
            </div>

    )
}

export default Card;
