import React from 'react'
import Image from '../images/profileimage.jpeg'

export default function Info(){
    return(
        <div className='info'>
            
            <img src={Image} alt='profile' className="info--image"/>
            <h1 className='info--title'>Mauro Kein</h1>
            <h4 className='info--subtitle'>Fullstack Developer</h4>
            <h5 className='info--website'>www.maurokein.github.io</h5>
            <button className='info--button1'>
                <i class="fa fa-envelope" aria-hidden="true"></i>
                Email
            </button>
            <button className='info--button2'>
                <i class="fa fa-linkedin" aria-hidden="true"></i>
                   Linkedin
            </button>
        </div>
    )
}