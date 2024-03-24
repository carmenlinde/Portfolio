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
            <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
                <div className='container'>
                    <Link className='navbar-brand' to="/">
                        <img src={LexiePhoto} alt="Lexie" className='lexie img-fluid rounded-circle' />
                        <span className='nameTag text-center'>Lexie Linde</span>
                    </Link>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                        <ul className='navbar-nav ml-auto'>
                            <li className='nav-item'>
                                <Link className='nav-link' to="/">Portfolio</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to="/about">About</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='container mt-5'>
                <Routes>
                    <Route path="/" element={<Portfolio />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/pathicWay" element={<PathicWay />} />
                    <Route path="/lvl5" element={<Lvl5 />} />
                    <Route path="/lvl4" element={<Lvl4 />} />
                </Routes>
            </div>
        </Router>
    )
}
