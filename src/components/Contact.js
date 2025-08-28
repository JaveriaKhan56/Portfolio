import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
import { SiGmail } from "react-icons/si";
import "../index.css"


const Contact = () => {
  return (
    <div className='container contact'>
    <div style={{fontSize: 40, color: 'white', textAlign: 'center'}}>Get In Touch</div>
    <div style={{fontSize: 22, color: 'gray', textAlign: 'center'}}>If you’d like to get in touch? you can 
    <a href='mailto:javeriakhan0330@gmail.com' target='_blank' rel="noopener noreferrer" style={{textDecoration: 'none', color: 'beige'}}> email me </a>   or send a 
    <a href='https://www.instagram.com/javeriakhan.jk/' target='_blank' rel="noopener noreferrer" style={{textDecoration: 'none', color: 'beige'}}> DM on my IG. </a>
     I’ll get back to you when I can.</div>
    <div className='contact-icons'
      data-aos="zoom-in-up"
      data-aos-duration="1000"
    >
        <a href='https://www.instagram.com/javeriakhan.jk/' target='_blank' rel="noopener noreferrer" className='items'> <FaInstagram className='icons' /> </a>
        <a href='https://www.linkedin.com/in/javeria-khan-194709242/' target='_blank' rel="noopener noreferrer" className='items'> <CiLinkedin className='icons'/> </a>
        <a href='https://github.com/JaveriaKhan56' target='_blank' rel="noopener noreferrer" className='items'> <IoLogoGithub className='icons' /> </a>
        <a href='mailto:javeriakhan0330@gmail.com' target='_blank' rel="noopener noreferrer" className='items'> <SiGmail className='icons' /> </a>
    </div>
    </div>
  )
}

export default Contact
