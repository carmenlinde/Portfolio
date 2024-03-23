import React from 'react'
import '../styles/lvl4.css'
import Lvl4Home from '../images/lvl4Home.png'
import Lvl4About from '../images/lvl4About.png'
import Lvl4Add from '../images/lvl4Add.png'


export default function Lvl4() {
    return (
        <div className='movieBuff'>
            <h1 className='h1'>Movie Buff</h1>
            <p className='para'>I have developed a website with a concept similar to the Book Realm, focusing on an ever-expanding database.
                However, in this case, the platform is dedicated to movies. My creation allows users to contribute to a growing
                repository of cinematic content. This platform not only enables users to add their favorite movies but also provides
                a curated space for discovering new and noteworthy films, this took aproxamently 3 days. Below you
                will find the work of the website
            </p>
            <div className='imgContainer'>
                <img src={Lvl4Home} alt="" className='lvl4Img1' />
                <img src={Lvl4About} alt="" className='lvl4Img2' />
                <img src={Lvl4Add} alt="" className='lvl4Img3' />
            </div>
        </div>
    )
}