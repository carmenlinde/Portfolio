import React from 'react'
import '../styles/pathic.css'
import PathicWayHome from '../images/pathicWayHome.png'
import PathicWayAbout from '../images/pathicWayAbout.png'
import PathicWayService from '../images/pathicWayService.png'
import PathicWayServicePay from '../images/pathicWayServicePay.png'



export default function PathicWay() {
    return (
        <div className='pwBody'>
            <h1 className='h1'>Pathic Way</h1>
            <p className='para'>Pathic Way is a website that I developed for my sister's business. It is currently a work in progress, evident by the placeholder
                text in some paragraphs generated using the 'lorem' command. The development of this website spanned approximately two weeks.
                The design elements incorporated into the Pathic Way site were meticulously crafted based on my sister's specifications, and
                I executed them accordingly. Below you will find the work of the website
            </p>
            <div className='imgContainer'>
                <img src={PathicWayHome} alt="" className='pathicWayImg1'/>
                <img src={PathicWayAbout} alt="" className='pathicWayImg2'/>
                <img src={PathicWayService} alt="" className='pathicWayImg3'/>
                <img src={PathicWayServicePay} alt="" className='pathicWayImg4'/>
            </div>
        </div>
    )
}