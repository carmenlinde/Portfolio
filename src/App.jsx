import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './styles/main.css'
import Portfolio from './components/Portfolio'
import About from './components/About'
import Contact from './components/Contact'
import PathicWay from './components/PathicWay'
import Lvl5 from './components/Lvl5'
import Lvl4 from './components/Lvl4'
import LexiePhoto from './images/lexie.jpeg'


export default function App() {
    return (
        <Router>
            <nav className='navContainer'>
                <div className='titleContainer'>
                    <img src='' alt="" className='lexie' />
                    <h1 className='name'>Lexie Linde </h1> <p className='span'>Portfolio</p>
                </div>
                <div className='firstLinks'>
                <Link className = "links"to="/">Portfolio</Link>
                <Link className = "links"to="/about">About</Link>
                <Link className = "links"to="/contact">Contact</Link>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pathicWay" element={<PathicWay />} />
                <Route path="/lvl5" element={<Lvl5 />} />
                <Route path="/lvl4" element={<Lvl4 />} />
            </Routes>
        </Router>
    )
}