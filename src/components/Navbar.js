import React, { useState } from 'react';
import './Navbar.scss';
import logo from '../assets/logo.svg';
import { ReactComponent as Search } from '../assets/search.svg';
import { ReactComponent as Bag } from '../assets/shoppingbag.svg';
import { ReactComponent as Message } from '../assets/message-circle.svg';
import { ReactComponent as MenuIcon } from '../assets/menu.svg';
import Menu from './Menu';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand"><a href="/"><img src={logo} alt="Logo" /></a></div>
      <div className="navbar-conf" onClick={toggleMenu}><MenuIcon />Categories</div>
      <ul className="navbar-frame-menu">
        <li className="navbar-frame-item"><a href="#gifting">Gifting</a></li>
        <li className="navbar-frame-item"><a href="#travel">Travel</a></li>
        <li className="navbar-frame-item"><a href="#welcome">Adults Welcome</a></li>
        <li className="navbar-frame-item"><a href="#art">Art & Home Décor</a></li>
        <li className="navbar-frame-item"><a href="#space">Space</a></li>
        <li className="navbar-frame-item"><a href="#pop">Pop Culture</a></li>
        <li className="navbar-frame-item"><a href="#toddlers">Toddlers</a></li>
        <li className="navbar-frame-item"><a href="#playing">Real World Role Playing</a></li>

      </ul>
      <ul className="navbar-menu">
        <li className="navbar-item"><Message />Contact us</li>
        <li className="navbar-item"><Bag /> Request</li>
        <li className="navbar-item"><Search />Search</li>
      </ul>
      <Menu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </nav>
  );
};

export default Navbar;
