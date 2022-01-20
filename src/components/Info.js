import React from 'react'
import Image from '../images/profileimage.jpeg'

export default function Info(){
    return(
        <div className='info'>
            <div className='info-container'>
                <img src={Image} alt='profile' className="container--image"/>
                <h1 className='container--title'>Mauro Kein</h1>
                <h4 className='container--subtitle'>Fullstack Developer</h4>
                <h5 className='container--website'>www.maurokein.github.io</h5>
                <div className='container--buttons'>
                    <button className='container--buttons__1'>
                        <i class="fa fa-envelope" aria-hidden="true"></i>
                       <strong>Email</strong>
                    </button>
                    <button className='container--buttons__2'>
                        <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                        Linkedin
                    </button>
                </div>
            </div>
        </div>
    )
}