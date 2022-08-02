import React, { useState } from 'react'
import axios from 'axios'

function Napster() {

    const apiKey = process.env.REACT_APP_NAPSTER

    const url = `http://api.napster.com/v2.2/artists/top?apikey=${apiKey}`

    const [artists, setArtists] = useState();

    function getData() {
        axios.get(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json; charset=UTF-8',
            }
        })
            .then(response => {
                console.log(response)
                setArtists(response.data.artists)
            })
            .catch(error => console.log("Error" + error))

    }
    return (
        <>
            <h1>Napster</h1>
            <button onClick={() => getData()}>Check Top Artists</button>
            {/* {<h1>JSON: </h1> && JSON.stringify(artists)} */}
            {artists?.map(artist => {
                return (
                    <div key={artist.id}>
                        <h2>{artist.name} ({artist.id})</h2>
                        <p>{artist.blurbs[0] ? artist.blurbs[0] : "Artist doesn't have a description."}</p>
                    </div>
                )
            })}
        </>
    )
}

export default Napster