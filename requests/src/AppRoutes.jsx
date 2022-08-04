import React from 'react'
import { Routes, Route } from 'react-router'
import Ghibli from './components/Ghibli';
import Nasa from './components/Nasa';
import Pokeapi from './components/Pokeapi';
import Home from './components/Home';
import Digimon from './components/Digimon';
import ChuckNorris from './components/ChuckNorris';
import Imdb from './components/Imdb';
import StarWars from './components/StarWars';
import Deezer from './components/Deezer';
import Napster from './components/Napster';
import News from './components/News';

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemon" element={<Pokeapi />} />
                <Route path="/digimon" element={<Digimon />} />
                <Route path="/ghibli" element={<Ghibli />} />
                <Route path="/nasa" element={<Nasa />} />
                <Route path="/imdb" element={<Imdb />} />
                <Route path="/starwars" element={<StarWars />} />
                <Route path="/chucknorris" element={<ChuckNorris />} />
                <Route path="/deezer" element={<Deezer />} />
                <Route path="/napster" element={<Napster />} />
                <Route path="/news" element={<News />} />
            </Routes>
        </>
    )
}

export default AppRoutes;