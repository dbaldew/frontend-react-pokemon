import React, {useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';
import Card from "./Components/Card/Card";

function App() {

    //state
    const [allPokemon, setAllPokemon] = useState([]);

    //useEffect
    useEffect(() => {

        //fetch all pokemon - home page loads first 20
        async function getAllPokemon() {
            try {
                const result = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20');
                console.log(result.data)
                setAllPokemon(result.data)
            } catch (e) {
                console.error(e)
            }
        };
        getAllPokemon();

    }, []);

    //loading message while fetching data
    //button previous 20 (disabled at 0) - button next 20 (disabled at max )
    //to get url map result.data



    //bij deze map functie liep ik vast:
    return (
        <div>
            {Object.keys(allPokemon).length > 0 &&
            <Card
                // name={allPokemon.name}
                url = {allPokemon.url}
            />
            }
        </div>
    );
}

export default App;
