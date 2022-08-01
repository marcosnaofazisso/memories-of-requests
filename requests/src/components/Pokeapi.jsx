import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Pokeapi() {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
            console.log(response.data.results[0])
            setPokemons(response.data.results)

        }
        getData();

    }, []);

    return (
        <>
            <h1>PokeAPI</h1>
            {/* {<h1>JSON: </h1> && JSON.stringify(pokemons)} */}
            {pokemons?.map(pokemon => {
                return (
                    <div key={pokemon.name}>
                        <strong>{pokemon.name}</strong>
                        <p>{pokemon.url}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Pokeapi