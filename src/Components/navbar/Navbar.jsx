import React from 'react';
import logo from '../../assets/DZ.png';
import './Navbar.css';

export const Navbar = () => {
  return (
    <div>
      <header className="header">
        <img src={logo} alt="Logo"></img>

        <nav className='navbar'>
          <a className='nav-link'>About</a>
          <a className='nav-link'>Articles</a>
        </nav>

        <button className='nav-btn'>Subscription</button>
      </header>
    </div>
  );
}

;
