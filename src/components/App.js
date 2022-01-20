import React from 'react'
import Info from './Info'
import About from './About'
import Interests from './Interests'

export default function App(){
    return(
        <div className='app'>
            <div className='card'>
                <Info />
                <About />
                <Interests />
            </div>
        </div>
    )
}