import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

export default function NewRequests() {

    const [films, setFilms] = useState([])

    useEffect(() => {
        var t0 = performance.now()

        try {
            axios.get("https://ghibliapi.herokuapp.com/films")
                .then(response => { setFilms(response.data) })

        } catch (error) {
            console.log("Error" + error)
        }

        var t1 = performance.now()
        console.log('AXIOS - Time taken to execute:' + (t1 - t0) + ' milliseconds')

    }, [])


    return (
        <>
            <div>newRequests</div>
            <br />
            {films.map(film => {
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
