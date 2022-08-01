import React, { useState } from 'react'
import axios from 'axios'

function StarWars() {

    const url = "https://swapi.dev/api/people/"

    const [characters, setCharacters] = useState();

    function getData() {
        axios.get(url)
            .then(response => {
                console.log(response.data.results)
                setCharacters(response.data.results)
            })
            .catch(error => console.log("Error" + error))

    }
    return (
        <>
            <h1>StarWars</h1>
            {/* {<h1>JSON: </h1> && JSON.stringify(characters)} */}
            {characters?.map(character => {
                return (
                    <div key={character.name}>
                        <h2>{character.name}</h2>
                        <p>{character.birth_year}</p>
                    </div>
                )
            })}
            <button onClick={() => getData()}>Gerar dados de API</button>
        </>
    )
}

export default StarWars