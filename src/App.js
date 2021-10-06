import React, {useState} from 'react';
import axios from 'axios';
//import {useState, useEffect} from "react";
import './App.css';

import Card from "./Components/Card/Card";

function App() {
    //state
    const [allPoke, setAllPoke] = useState({});

    //fetch all pokemon - home page loads first 20
    async function getAllPoke() {
        try {
            const result = await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20');
            console.log(result.data)
            setAllPoke(result.data)
        } catch (e) {
            console.error(e)
        }
    };
    getAllPoke();


    //loading message while fetching data
    //button previous 20 (disabled at 0) - button next 20 (disabled at max )

    return (
        <Card

        />

    );
}

export default App;
