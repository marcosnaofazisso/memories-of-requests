import React from 'react'
import { useFetch } from './hooks/useFetch'

function BetterRequests(props) {

    const { data } = useFetch('https://ghibliapi.herokuapp.com/films')

    return (
        <>
            <h1>Ghibli Movies</h1>
            {<h1>JSON: </h1> && JSON.stringify(data)}
            {data?.map(film => {
                return (
                    <div key={film.id}>
                        <strong>{film.title}</strong>
                        <p>{film.description}</p>
                    </div>
                )
            })}

        </>
    )
}

export default BetterRequests