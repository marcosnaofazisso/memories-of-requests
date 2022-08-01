import React, { useState } from 'react'
import axios from 'axios'

function Imdb() {

    const key = process.env.REACT_APP_API_KEY

    const url = "https://imdb-api.com/en/API/Top250Movies/" + key

    const [movies, setMovies] = useState();

    function getData() {
        axios.get(url)
            .then(response => {
                console.log(response)
                setMovies(response.data.items)
            })
            .catch(error => console.log("Error" + error + "KEY" + key))

    }

    return (
        <>
            <h1>Imdb</h1>
            <button onClick={() => getData()}>Verificar Top 250 Filmes</button>
            {/* {<h1>JSON: </h1> && JSON.stringify(digimons)} */}
            {movies?.map(movie => {
                return (
                    <div key={movie.id}>
                        <h2>{movie.rank} - {movie.title}</h2>
                        <img src={movie.image} alt={movie.title} />
                        <p>{movie.crew}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Imdb