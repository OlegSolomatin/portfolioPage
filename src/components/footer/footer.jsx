import React from 'react'
import './footer.css'
import {FaInstagram} from "react-icons/fa"
import {FaCodepen} from "react-icons/fa"
import {SiVk} from "react-icons/si"

const Footer = () => {
    return(
        <>
            <footer>
                <a href="#" className='footer__logo'>Oleg Solomatin</a>

                <ul className="permalinks">
                    <li><a href="#" target='_blank'>Home</a></li>
                    <li><a href="#about" target='_blank'>About</a></li>
                    <li><a href="#experience" target='_blank'>Experience</a></li>
                    <li><a href="#services" target='_blank'>Services</a></li>
                    <li><a href="#portfolio" target='_blank'>Portfolio</a></li>
                    <li><a href="#contact" target='_blank'>Contact</a></li>
                </ul>

                <div className="footer__socials">
                    <a href="https://instagram.com"><FaInstagram/></a>
                    <a href="https://codepen.io"><FaCodepen/></a>
                    <a href="https://vk.com"><SiVk/></a>
                </div>

                <div className="footer__copyright">
                    <small>&copy: Oleg Solomatin. All rights reserved.</small>
                </div>
            </footer>
        </>
    )
}

export default Footer