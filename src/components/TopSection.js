import React from 'react';
import './TopSection.scss';
import { ReactComponent as Sound } from '../assets/sound.svg';
import { ReactComponent as Download } from '../assets/download.svg';
import { ReactComponent as Chevrons } from '../assets/chevrons.svg';

const TopSection = () => {
  return (
    <section className="top-section">
      <span className="first">&lt;video autoplay with no sound&gt;</span>
      <span className="second">Welcome to the <br></br>Play Matters Interactive Lookbook</span>
      <div className="icon1"><Sound /></div>
      <div className="icon2"><Download /></div>
      <span className="scroll">Scroll down</span><Chevrons className="chevron"/>

    </section>
  );
};

export default TopSection;
