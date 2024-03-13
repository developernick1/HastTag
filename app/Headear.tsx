import React from 'react'
import './styles/Home.css'
import LogoIcon from './Images/Cam.png'
import Image from 'next/image'

function Header() {
    return (
        <div className='headerWrapper' >
            <div className='logoWrap' >
                <Image
                    src={LogoIcon}
                    width={120}
                    height={70}
                    alt="Picture of the camera" />
            </div>
            <div className='navLink' >
                <h3>Best Para</h3>
                <h3>Top Para</h3>
                <h3>Trending Para</h3>
            </div>
        </div>
    )
}

export default Header

