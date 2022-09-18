import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from "./haedersocials";

const Header = () => {
    return(
        <>
            <header>
                <div className='container header__container'>
                    <h5>
                        Hello I'm
                    </h5>
                    <h1>Oles Solomatin</h1>
                    <h5 className="text-light">Frontend Developer</h5>
                    <CTA />
                    <HeaderSocials />
                    <div className="me">
                        <img src={ME} alt="My avatar"/>
                    </div>

                    <a href="#contact" className='scroll_down'>Scroll down</a>
                </div>
            </header>
        </>
    )
}

export default Header