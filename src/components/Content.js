// src/components/MainContent.js
import React from 'react';
import './Content.scss';
import img449 from '../assets/img/449.png';
import img450 from '../assets/img/450.png';
import img452 from '../assets/img/452.png';
import img451 from '../assets/img/451.png';
import img448 from '../assets/img/448.png';
import img453 from '../assets/img/453.png';
import img463 from '../assets/img/463.png';
import img464 from '../assets/img/464.png';
import img467 from '../assets/img/467.png';
import img465 from '../assets/img/465.png';
import img468 from '../assets/img/468.png';
import img466 from '../assets/img/466.png';

import { ReactComponent as Arrow } from '../assets/arrow.svg';

const Content = () => {
  return (
    <section>
      <div id="gifting" className="bloco">
        <div className="inner-container ">
          <span>Gifting</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="border">
          <h3>Toys perfect for birthday gift-giving season in Spring</h3>
          <p className="second-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.</p>
          <button>View details<Arrow className="arrow" /></button>
          <div className="image-container">
            <img src={img449} alt="img449" />
          </div>
          <div className="image2-container">
            <img src={img450} alt="img450" />
          </div>
          <div className="last-container">
            <h3>Gifts for Mom</h3>
            <p className="second-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.</p>
            <button>View details<Arrow className="arrow" /></button>
          </div>
        </div>
      </div>

      <div id="travel" className="bloco">
        <div className="inner-container">
          <span>Travel</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="border border-green">
          <h3>Travel the world no matter where you are. No Passport needed.</h3>
          <p className="second-p margin-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.</p>
          <button>View details<Arrow className="arrow" /></button>
          <div className="image-container">
            <img src={img452} alt="img449" className="one-img"/>
          </div>
          <div className="image2-container">
            <img src={img451} alt="img450" />
          </div>
          <div className="last-container">
            <h3>Fun accessories to take with you on your travels or keep kids entertained</h3>
            <p className="second-p margin-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.</p>
            <button className="custom-button">View details<Arrow className="arrow" /></button>
          </div>
        </div>
      </div>

      <div id="welcome" className="bloco">
        <div className="inner-container">
          <span>Adults welcome</span>
          <p className="one-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="border border-blue">
          <h3>For the Kids at Heart who love to unplug, unbox and unwind</h3>
          <p className="second-p margin-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.</p>
          <button>View details<Arrow className="arrow" /></button>
          <div className="image-container">
            <img src={img448} alt="img448" className="one-img"/>
          </div>
        </div>
      </div>

      <div id="art" className="bloco">
        <div className="inner-container">
          <span>Art & Home Décor </span>
          <p className="one-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="border border-gray">
          <div className="image2-container">
            <img src={img453} alt="img453" className="one-img"/>
          </div>
          <div className="last-container one-bloco">
            <h3>Playful ideas for refreshing your space while tapping into your more creative side</h3>
            <p className="second-p margin-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.</p>
            <button className="custom-button">View details<Arrow className="arrow" /></button>
          </div>
        </div>
      </div>

      <div id="space" className="bloco">
        <div className="inner-container">
          <span>Space</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="border border-black">
          <h3>Capture the wonders of space and exploration</h3>
          <p className="second-p margin-p">In the last 30 years, nothing has taken us deeper into space – or better shaped the way we see the universe – than the Hubble Space Telescope.</p>
          <button>View details<Arrow className="arrow" /></button>
          <div className="image-container">
            <img src={img463} alt="img463" className="one-img"/>
          </div>
        </div>
      </div>

      <div id="pop" className="bloco">
        <div className="inner-container">
          <span>Pop Culture</span>
          <p className="one-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="border border-pink">
          <div className="image2-container">
            <img src={img464} alt="img464" className="one-img"/>
          </div>
          <div className="last-container one-bloco">
            <h3>Recreate scenes from your favorite movies and TV series</h3>
            <p className="second-p margin-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.</p>
            <button className="custom-button">View details<Arrow className="arrow" /></button>
          </div>
        </div>
      </div>

      <div id="toddlers" className="bloco">
        <div className="inner-container ">
          <span>Toddlers</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="border border-yellow">
          <h3>Waterproof toys for toddlers and beyond</h3>
          <p className="second-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.</p>
          <button>View details<Arrow className="arrow" /></button>
          <div className="image-container">
            <img src={img467} alt="img467" />
          </div>
          <div className="image2-container">
            <img src={img465} alt="img465" />
          </div>
          <div className="last-container">
            <h3>xx TBD</h3>
            <p className="second-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.</p>
            <button>View details<Arrow className="arrow" /></button>
          </div>
        </div>
      </div>

      <div id="playing" className="bloco">
        <div className="inner-container">
          <span>Real World Role Playing</span>
          <p className="one-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="border border-red">
          <h3>Waterproof toys for toddlers and beyond</h3>
          <p className="second-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.</p>
          <button>View details<Arrow className="arrow" /></button>
          <div className="image-container">
            <img src={img468} alt="img468" />
          </div>
          <div className="image2-container">
            <img src={img466} alt="img466" />
          </div>
          <div className="last-container">
            <h3>xx TBD</h3>
            <p className="second-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas scelerisque nulla vitae mi scelerisque vulputate. Aenean ultrices leo eget lacus maximus, vitae feugiat.</p>
            <button>View details<Arrow className="arrow" /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
