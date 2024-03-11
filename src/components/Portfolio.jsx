import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/portfolio.css'
import pathicWay from '../images/pathicHome1.jpg'
import lvl5Home from '../images/lvl5Home1.jpg'
import lvl4Home from '../images/lvl4Home1.jpg'




export default function Portfolio() {
    return (
        <div className='portInfo'>
            <h1 className='myWork'>My Work</h1>
            <Link to="/pathicWay" rel="noopener noreferrer">
                <img src={pathicWay} alt="" className='homePageImg' />
            </Link>
            <Link to="/lvl5" rel="noopener noreferrer">
                <img src={lvl5Home} alt="" className='homePageImg' />
            </Link>
            <Link to="/lvl4" rel="noopener noreferrer">
                <img src={lvl4Home} alt="" className='homePageImg' />
            </Link>


        </div>

    )
}