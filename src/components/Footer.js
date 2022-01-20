import React from 'react';

export default function Footer(){
    return(
        <div className="container">
            <ul className='container--list'>
                <li className='container--list__icon1'>
                   <i class="fa fa-twitter" aria-hidden="true"></i>
                </li>
                <li className='container--list__icon2'>
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                </li>
                <li className='container--list__icon3'>
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                </li>
                <li className='container--list__item4'>
                    <i class="fa fa-github" aria-hidden="true"></i>
                </li>
            </ul>
        </div>
    )
}