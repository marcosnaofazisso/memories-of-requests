import React from 'react'
import { Routes, Route } from 'react-router'
import Ghibli from './components/Ghibli';
import Nasa from './components/Nasa';
import Pokeapi from './components/Pokeapi';
import Home from './components/Home';

function AppRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemon" element={<Pokeapi />} />
                <Route path="/nasa" element={<Nasa />} />
                <Route path="/ghibli" element={<Ghibli />} />
            </Routes>
        </>
    )
}

export default AppRoutes;