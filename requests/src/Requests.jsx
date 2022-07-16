import React, { useState, useEffect } from 'react'

export default function Requests() {

    const [data, setData] = useState([])

    useEffect(() => {

        const getData = async () => {
            var t0 = performance.now()

            try {
                const response = await fetch("https://ghibliapi.herokuapp.com/films");
                const data = await response.json()
                setData(data);
                // console.log(JSON.stringify(data));

            } catch (error) {
                console.log("Error:", error)
            }

            var t1 = performance.now()
            console.log('useFetch normal - Time taken to execute:' + (t1 - t0) + ' milliseconds')
        }
        getData();

    }, [])

    return (
        <>
            <h1>Requests</h1>
            <br />
            <br />
            <br />
            {data.map((item) => {
                return (
                    <div key={item.id}>
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                    </div>)
            })}
        </>
    )
}