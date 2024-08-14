import React from 'react';
import './Hero.css';
import skateboardImage from '../../assets/images/skateboard.png.jpg';

const Hero = () => {
  return (
      <div className="hero-image">
        <img src={skateboardImage} alt="Skateboarding" />
        
      </div>
    );
}

export default Hero;
