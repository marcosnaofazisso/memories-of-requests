import React, { useState } from 'react'
import axios from 'axios'

function Medium() {

  const country = 'br'
  const apiKey = process.env.REACT_APP_NEWS

  const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`

  const [news, setNews] = useState();

  const imageStyle = {
    width: '400px',
  }

  function getData() {
    axios.get(url)
      .then(response => {
        console.log(response)
        setNews(response.data.articles)
      })
      .catch(error => console.log("Error" + error))

  }
  return (
    <>
      <h1>News</h1>
      <button onClick={() => getData()}>Pegar manchetes do Brasil!</button>
      {/* {<h1>JSON: </h1> && JSON.stringify(news)} */}
      {news && (news?.map(n => {
        return (
          <div key={n.publishedAt}>
            <h2>{n.author} - {n.title}</h2>
            <img src={n.urlToImage} alt={n.title} style={imageStyle} />
            <p>{n.description}</p>
          </div>
        )
      }))}
    </>
  )
}

export default Medium