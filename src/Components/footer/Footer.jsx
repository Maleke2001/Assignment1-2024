import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

export const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-icons'>
        <FontAwesomeIcon icon={faFacebook} className='icon' />
        <FontAwesomeIcon icon={faInstagram} className='icon' />
        <FontAwesomeIcon icon={faPinterest} className='icon' />
      </div> 
      
      <div className='footer-links'>
        <a>About</a>
        <a>Articles</a>
        <button className='footer-btn'>Subscription</button>
      </div>
    </div>
  );
}
