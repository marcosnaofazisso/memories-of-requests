import React, { useState } from 'react'
import axios from 'axios'

function Deezer() {

    const id = process.env.REACT_APP_DEEZER

    const urlProxy = "https://cors-anywhere.herokuapp.com/"
    const userUrl = `${urlProxy}https://api.deezer.com/user/${id}`
    const playlistsUrl = `${urlProxy}https://api.deezer.com/user/${id}/playlists`

    const [users, setUsers] = useState();
    const [playlists, setPlaylists] = useState();

    function getData() {
        axios.get(userUrl, {
            'Access-Control-Allow-Origin': '*',
        })
            .then(response => {
                // console.log(response)
                setUsers(response.data)
            })
            .catch(error => console.log("Error" + error))

        axios.get(playlistsUrl, {
            'Access-Control-Allow-Origin': '*',
        })
            .then(response => {
                console.log(response)
                setPlaylists(response.data.data)
            })
            .catch(error => console.log("Error" + error))

    }
    return (
        <>
            <h1>Deezer</h1>
            <button onClick={() => getData()}>GET User and Playlist</button>
            {/* {<h1>JSON: </h1> && JSON.stringify(users)} */}
            <div>
                {users && (<h2>{users.name} ({users.id})</h2>) &&
                    (<img src={users.picture_medium} alt={users.name} />)}
            </div>
            {playlists && (<div>
                <h1>TOTAL: {playlists.length}</h1>
                {playlists?.map(playlist => {
                    return (
                        <div key={playlist.id}>
                            <h2>{playlist.title}</h2>
                            <p>{playlist.duration} segs</p>
                        </div>
                    )
                })}
            </div>)}
        </>
    )
}

export default Deezer