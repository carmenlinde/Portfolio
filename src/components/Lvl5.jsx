import React from 'react'
import '../styles/lvl5.css'
import Lvl5Home from '../images/lvl5Home.png'
import Lvl5About from '../images/lvl5About.png'
import Lvl5Search1 from '../images/lvl5Search1.png'
import Lvl5Search2 from '../images/lvl5Search2.png'
import Lvl5Add1 from '../images/lvl5Add1.png'
import Lvl5Add2 from '../images/lvl5Add2.png'

export default function Lvl5() {
    return (
        <div>
            <h1 className='h1'>The Book Realm</h1>
            <p className='para'>The Book Realm is a website that I crafted to cater to book enthusiasts, facilitating effortless navigation through a
                continuously expanding database. This platform allows users to seamlessly add their favorite books or discover new literary works.
                The entire development process was approximately two days, resulting in a fully functional and user-friendly website. Below you
                will find the work of the website
            </p>
            <div className='imgContainer'>
                <img src={Lvl5Home} alt="" className='lvl5Img1' />
                <img src={Lvl5About} alt="" className='lvl5Img2' />
                <img src={Lvl5Search1} alt="" className='lvl5Img3' />
                <img src={Lvl5Search2} alt="" className='lvl5Img4' />
                <img src={Lvl5Add1} alt="" className='lvl5Img5' />
                <img src={Lvl5Add2} alt="" className='lvl5Img6' />
            </div>
        </div>
    )
}