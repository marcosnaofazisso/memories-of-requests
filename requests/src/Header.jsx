import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <>
            <h1>Header</h1>
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
            <NavLink to="chucknorris">Chuck Norris API</NavLink>
            <br />
        </>
    )
}

export default Header