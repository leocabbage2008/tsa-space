import React from 'react';
import '../assets/css/Hero.css';
//for ian
export default function Hero({ image, children }) {
  return (
    <div className='hero'>
      <img id='banner' src={image} alt='' />
      <h1 className='hero-text'>{children}</h1>
    </div>
  );
}
