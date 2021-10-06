import React from 'react';
import axios from 'axios';
import {useState, useEffect} from "react";
import './App.css';

//import Card from "./Components/Card/Card";


function App() {
    //state
    const endpoint = `https://pokeapi.co/api/v2/pokemon/jigglypuff`
    const [pokemon, setPokemon] = useState({});

    //fetch data
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/jigglypuff`);
                console.log(result.data);
                setPokemon(result.data)
            } catch (e) {
                console.error(e);
            }

        }fetchData()
    },[endpoint]
    )


    //home page loads first 20
    return (

//button previous 20 (disabled at 0) - button next 20 (disabled at max )
//loading message while fetching data
//card: name, sprite, nr of moves, weight, list of abilities




            <div className="cardContainer">
                {Object.keys(pokemon).length > 0 &&
                <>
                <h3>{pokemon.name}</h3>
                {<img src={pokemon.sprites.front_default}/>}
                    <ul>
                        {pokemon.abilties.map((ability) => {
                            return(
                                <li key={pokemon.name}>
                                    {ability.ability.name}
                                </li>)
                        })}
                    </ul>

                {/* alt="front default"*/}
                {/*/>*/}
                {/*    <h3>moves</h3>*/}
                {/*{pokemon.abilties.map((move) => {*/}
                {/*    return(*/}
                {/*    <li key={pokemon.name}>*/}
                {/*{move.ability.name}*/}
                {/*    </li>)*/}

                })}
                </>
                }

                    {/*{<img/>}*/}

                    {/* alt="front default"*/}
                    {/*/>*/}
                {/*    <h3>moves</h3>*/}
                {/*{pokemon.abilties.map((move) => {*/}
                {/*    return(*/}
                {/*    <li key={pokemon.name}>*/}
                {/*        {move.ability.name}*/}
                {/*    </li>)*/}
                {/*})}*/}
                    {/*{pokemon['abilities'].map((ability)=>{*/}
                    {/*    return(*/}
                    {/*        <p key={ability.slot}>{pokemon['abilities']}</p>*/}
                    {/*    )*/}
                    {/*    }*/}
                    {/*)}*/}
            </div>

    );
}

export default App;
