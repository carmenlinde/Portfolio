import React from 'react'
import '../styles/about.css'


export default function About() {
    return (
        <div>
            <h1 className='h1'>About Me</h1>
            <p className='para'>
                Hello, my name is Lexie Linde. Im 22 years old and an Army veteran with a strong work ethic and a passion for
                learning. I am great at efficiently completing tasks and I consistently strive for excellence in all that I do. Whether
                working collaboratively or independently, I alway deliver results. During my time in the Army, I served as a Team Lead,
                where my responsibilities included leading a group of individuals, distributing critical information, and ensuring the
                success of the missions. This experience honed my leadership and teamwork skills. I value building connections with new
                individuals and thrive in dynamic environments. Below, you will find an overview of my education leading up to this point.
            </p>
            <p className='paraList'>Education</p>
            <ul className='list'>
            <li>High School Diploma</li>
            <li>Basic Training</li>
            <li>AIT(Advanced individual training)</li>
            <li>FullStack Development Program at VSchool</li>
            </ul>
            <p className='paraList'>Languages</p>
            <ul className='list'>
                <li>Html</li>
                <li>css</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>Express</li>
                <li>Node.js</li>
                <li>JSON</li>
                <li>Git</li>
            </ul>

        </div>
    )
}