import React from 'react';
import '../styles/lvl4.css';
import Lvl4Home from '../images/lvl4Home.png';
import Lvl4About from '../images/lvl4About.png';
import Lvl4Add from '../images/lvl4Add.png';

export default function Lvl4() {
    return (
        <div className='container'>
            <h1 className='h1 text-center'>Movie Buff</h1>
            <p className='para'>I have developed a website with a concept similar to the Book Realm, focusing on an ever-expanding database.
                However, in this case, the platform is dedicated to movies. My creation allows users to contribute to a growing
                repository of cinematic content. This platform not only enables users to add their favorite movies but also provides
                a curated space for discovering new and noteworthy films, this took approximately 3 days. Below you
                will find the work of the website
            </p>
            <div className='imgContainer row justify-content-center'>
                <div className='col-md-4 text-center'>
                    <img src={Lvl4Home} alt="" className='center-image4 img-fluid rounded'/>
                </div>
                <div className='col-md-4 text-center'>
                    <img src={Lvl4About} alt="" className='center-image4 img-fluid rounded'/>
                </div>
                <div className='col-md-4 text-center'>
                    <img src={Lvl4Add} alt="" className='center-image4 img-fluid rounded'/>
                </div>
            </div>
        </div>
    );
}
