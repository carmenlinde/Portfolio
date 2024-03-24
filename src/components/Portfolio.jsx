import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/portfolio.css';
import pathicWay from '../images/pathicHome1.jpg';
import lvl5Home from '../images/lvl5Home1.jpg';
import lvl4Home from '../images/lvl4Home1.jpg';

export default function Portfolio() {
    return (
        <div className='portInfo container'>
            <h1 className='myWork text-center'>My Work</h1>
            <div className='row justify-content-center'>
                <div className='col-md-4 text-center'>
                    <Link to="/pathicWay" rel="noopener noreferrer">
                        <img src={pathicWay} alt="" className='center-image img-fluid rounded'/>
                    </Link>
                </div>
                <div className='col-md-4 text-center'>
                    <Link to="/lvl5" rel="noopener noreferrer">
                        <img src={lvl5Home} alt="" className='center-image img-fluid rounded'/>
                    </Link>
                </div>
                <div className='col-md-4 text-center'>
                    <Link to="/lvl4" rel="noopener noreferrer">
                        <img src={lvl4Home} alt="" className='center-image img-fluid rounded'/>
                    </Link>
                </div>
            </div>
        </div>
    );
}


