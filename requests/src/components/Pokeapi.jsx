import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Pokeapi() {

    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        async function getData() {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu');
            console.log(response)
            setPokemons(response)

        }
        getData();

    }, []);

    return (
        <>
            <h1>PokeAPI</h1>
            {<h1>JSON: </h1> && JSON.stringify(pokemons)}

            {/* {pokemons?.map(pokemon => {
                return (
                    <div key={pokemon.data.id}>
                        <strong>{pokemon.data.name}</strong>
                        <p>{pokemon.data.species.url}</p>
                    </div>
                )
            })} */}
        </>
    )
}

export default Pokeapi