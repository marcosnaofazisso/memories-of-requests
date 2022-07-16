import { useState, useEffect } from 'react'
import axios from 'axios'

export function useFetch(url) {

    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url)
            .then(
                response => { setData(response.data) })
        // console.log(JSON.stringify(data))

    }, [])

    return { data }

}
