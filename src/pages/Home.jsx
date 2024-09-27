import React from 'react';
import './Home.css';
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div className='home-content'>
      <div className='intro'>
        <p className='p1 para'>Hi! I am Rida-e-Zahra</p>
        <p className='p2 para'>
          {/* This typing animation code will also be found by its documentaion website and can be customized as per need */}
        <TypeAnimation
            sequence={[
              'Software Engineer', 
              1000, // Waits 1 second
              'Web Developer', 
              1000, // Waits 1 second
            ]}
            wrapper="span"
            speed={200}
            style={{ fontSize: '2rem', color: '#ff0081' }}
            repeat={Infinity}
          />
        </p>
        <p className='p3 para'>I love creating engaging and responsive websites that offer a seamless user experience.</p>
        <p className='p3 para'>I thrive on turning creative ideas into functional and visually appealing web solutions.</p>
        <a href='/Resume.pdf' download="Rida-e-Zahra-Resume.pdf">
          <button className='resume-btn'>
            Download My Resume
          </button>
        </a>
      </div>
      <div className='image'>
      
      </div>
    </div>
  )
}
