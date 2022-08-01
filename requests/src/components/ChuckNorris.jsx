import React, { useState } from 'react'
import axios from 'axios'


function ChuckNorris() {

    const url = "https://api.chucknorris.io/jokes/random"

    const [jokes, setJokes] = useState();

    function getData() {
        axios.get(url)
            .then(response => {
                console.log(response)
                setJokes(response.data)
            })
            .catch(error => console.log("Error" + error))

    }

    return (
        <>
            <h1>Chuck Norris</h1>
            <h3>{jokes && (jokes.value)}</h3>
            <button onClick={() => getData()}>Gerar Piada</button>
            {/* {<h1>JSON: </h1> && JSON.stringify(jokes)} */}

        </>
    )
}

export default ChuckNorris