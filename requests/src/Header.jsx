import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <h1>Header</h1>
            <NavLink to="/">Home</NavLink>
            <br />
            <NavLink to="pokemon">PokeAPI</NavLink>
            <br />
            <NavLink to="digimon">Digimon API</NavLink>
            <br />
            <NavLink to="ghibli">Ghibli API</NavLink>
            <br />
            <NavLink to="nasa">Nasa API</NavLink>
            <br />
            <NavLink to="imdb">IMDB API</NavLink>
            <br />
            <NavLink to="starwars">Star Wars API</NavLink>
            <br />
            <NavLink to="chucknorris">Chuck Norris API</NavLink>
            <br />
            <NavLink to="napster">Napster API</NavLink>
            <br />
            <NavLink to="deezer">Deezer API</NavLink>
            <br />
            <NavLink to="news">News API</NavLink>
            <br />
        </>
    )
}

export default Header