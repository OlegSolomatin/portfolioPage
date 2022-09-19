import React from 'react'
import './contact.css'
import {MdOutlineEmail} from "react-icons/md";
import {FaTelegramPlane} from "react-icons/fa";
import {RiWhatsappLine} from "react-icons/ri"
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4oscj7h', 'template_xokz579', form.current, 'drTAkw6UaCzrisWk6')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return(
        <>
            <section id='contact'>
                <h5>Get In Touch</h5>
                <h2 className='text-5xl'>Contact Me</h2>

                <div className="container contact__container">
                    <div className="contact__options">
                        <article className="contact__option">
                            <MdOutlineEmail className='contact__option-icon'/>
                            <h4>Email</h4>
                            <h5>olegsolomatin2018@yandex.ru</h5>
                            <a href="mailto:olegsolomatin2018@yandex.ru" target='_blank'>Sens a message</a>
                        </article>
                        <article className="contact__option">
                            <FaTelegramPlane className='contact__option-icon'/>
                            <h4>Telegram</h4>
                            <h5>@pfumiko</h5>
                            <a href="https://t.me/pfumiko" target='_blank'>Sens a message</a>
                        </article>
                        <article className="contact__option">
                            <RiWhatsappLine className='contact__option-icon'/>
                            <h4>What's App</h4>
                            <h5>+7&nbsp;999&nbsp;771&nbsp;91&nbsp;54</h5>
                            <a href="https://wa.me/79997719154" target='_blank'>Sens a message</a>
                        </article>
                    </div>

                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" name='name' placeholder='Your Full Name' required/>
                        <input type="email" name='email' placeholder='Your Email' required/>
                        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                        <button type='submit' className='btn btn-primary'>Send Message</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Contact