import React, { useState } from 'react'
import axios from 'axios'

function Nasa() {

    const url = "https://ssd-api.jpl.nasa.gov/sb_sat.api"

    const [satellites, setSatellites] = useState();

    function getData() {
        axios.get(url)
            .then(response => {
                console.log(response.data.data)
                setSatellites(response.data.data)
            })
            .catch(error => console.log("Error" + error))

    }
    return (
        <>
            <h1>Nasa</h1>
            <button onClick={() => getData()}>clicando aqui!</button>
            {/* {<h1>JSON: </h1> && JSON.stringify(satellites)} */}
            {satellites?.map(satellite => {
                return (
                    <div key={satellite.pdes}>
                        <strong>{satellite.sat.ref}</strong>
                        <p>{satellite.sat.prov_year}</p>
                    </div>
                )
            })}

        </>
    )
}

export default Nasa