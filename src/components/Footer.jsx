import React from 'react'
import './Footer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons/faArrowUp';


export default function Footer() {

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
  return (
    <footer className="footer-content">

        <div className='footer-sections'>
            <div className='section pages'>
                <h2 className='gradient-color'>Quick Links</h2>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/education'>Education</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li><Link to='/skills'>Skills</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>

            <div className='section links'>
                <h2 className='gradient-color'>Get in touch</h2>
                <a href="mailto:ridaezahra101@gmail.com" target="_blank" rel="noopener noreferrer"> 
                    <FontAwesomeIcon icon={faEnvelope} className='fa-icon'/> 
                </a>
                <a href="https://www.linkedin.com/in/rida-zahra-315931317/" target="_blank" rel="noopener noreferrer"> 
                    <FontAwesomeIcon icon={faLinkedin} className='fa-icon' />
                </a>
                <a href="https://github.com/Rida-E-Zahra1" target="_blank" rel="noopener noreferrer"> 
                    <FontAwesomeIcon icon={faGithub} className='fa-icon' /> 
                </a>
            </div>
        </div>

        <div className='bottom'>
            <p>Copyright &copy; 2024 MyPortfolio. All Rights Reserved | Created with ❤️ by Rida-e-Zahra.</p>
            <button className='top-btn' onClick={scrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </div>
    </footer>

  )
}
