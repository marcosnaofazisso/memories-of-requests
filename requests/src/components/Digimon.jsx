import React, { useState } from 'react'
import axios from 'axios'

function Digimon() {
    const url = "https://digimon-api.vercel.app/api/digimon"

    const [digimons, setDigimons] = useState();

    function getData() {
        axios.get(url)
            .then(response => {
                console.log(response)
                setDigimons(response.data)
            })
            .catch(error => console.log("Error" + error))

    }
    return (
        <>
            <h1>Digimon</h1>
            <button onClick={() => getData()}>Clique aqui para obter os dados</button>
            {/* {<h1>JSON: </h1> && JSON.stringify(digimons)} */}
            {digimons?.map(digimon => {
                return (
                    <div key={digimon.name}>
                        <h2>{digimon.name}</h2>
                        <img src={digimon.img} alt={digimon.name} />
                        <p>{digimon.level}</p>
                    </div>
                )
            })}

        </>
    )
}

export default Digimon