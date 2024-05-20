import React from 'react';
import './Menu.scss';
import img435 from '../assets/img/435.png';
import img495 from '../assets/img/495.png';
import img496 from '../assets/img/496.png';
import img497 from '../assets/img/497.png';
import img498 from '../assets/img/498.png';
import img499 from '../assets/img/499.png';
import img500 from '../assets/img/500.png';
import img501 from '../assets/img/501.png';
import img502 from '../assets/img/502.png';
import { ReactComponent as Home } from '../assets/home.svg';
import { ReactComponent as Bag } from '../assets/shoppingbag.svg';
import { ReactComponent as Message } from '../assets/message-circle.svg';
import { ReactComponent as X } from '../assets/x.svg';
import { ReactComponent as Logo } from '../assets/logo.svg';

const Menu = ({ isOpen, toggleMenu }) => {
  
  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <div className="menu-toggle" onClick={toggleMenu}><Logo className="logo"/><X className="x"/>
      </div>
      <div className="vertical-menu">
        <div>
          <h4 className="items"><Home className="icon"/>Home</h4>
          <h4 className="items"><Bag className="icon" />Requests</h4>
          <h4 className="items"><Message className="icon" />Contact us</h4>
          <div className="separator">
            <div className="text">Themes</div>
            <div className="line"></div>
          </div>
          <div className="items-2">Gifting</div>
          <div className="items-2">Travel</div>
          <div className="items-2">Adults Welcome</div>
          <div className="items-2">Art & Home Décor</div>
          <div className="items-2">Space</div>
          <div className="items-2">Pop Culture</div>
          <div className="items-2">Toddlers</div>
          <div className="items-2">Real World Role Playing</div>
        </div>
      </div>
      <div className="grid-menu">
        <div className="box inside"><img src={img435} alt="img435" /></div>
        <div className="box inside"><img src={img495} alt="img495" /></div>
        <div className="box inside"><img src={img496} alt="img496" /></div>
        <div className="box inside"><img src={img497} alt="img497" /></div>
        <div className="box inside"><img src={img498} alt="img498" /></div>
        <div className="box inside"><img src={img499} alt="img499" /></div>
        <div className="box inside"><img src={img500} alt="img500" /></div>
        <div className="box inside"><img src={img501} alt="img501" /></div>
        <div className="box inside"><img src={img502} alt="img502" /></div>
      </div>
    </div>
  );
};

export default Menu;
