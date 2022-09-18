import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from "react-icons/fa";
import {FiUser} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

const About = () => {
    return(
        <>
            <section id='about'>
                <h5>Go To Know</h5>
                <h2 className='text-5xl'>About Me</h2>

                <div className="container about__container">
                    <div className="about__me">
                        <div className="about__me-image">
                            <img src={ME} alt="About image"/>
                        </div>
                    </div>
                    <div className="about__content">
                        <div className="about__cards">
                            <article className="about__card">
                                <FaAward className='about__icon'/>
                                <h5>Experience</h5>
                                <small>1+ Years working</small>
                            </article>
                            <article className="about__card">
                                <FiUser className='about__icon'/>
                                <h5>Clients</h5>
                                <small>300+ Worldwide</small>
                            </article>
                            <article className="about__card">
                                <VscFolderLibrary className='about__icon'/>
                                <h5>Projects</h5>
                                <small>80+ Completed</small>
                            </article>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error labore molestias nemo praesentium
                            sunt. Aperiam consectetur cum et nam. Blanditiis consectetur labore unde ut? Esse illum
                            necessitatibus perferendis reiciendis sequi.</p>
                        <a href="#contact" className="btn btn-primary">Let's talk</a>
                    </div>




                    
                </div>
            </section>
        </>
    )
}

export default About