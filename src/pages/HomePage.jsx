import React from 'react';
import Layout from '../components/Layout';
import video from '../assets/images/world.mp4';
import '../assets/css/HomePage.css';
// https://commons.wikimedia.org/wiki/File:Polar_Vortex_in_Color.jpg
export default function HomePage() {
  return (
    <Layout>
<<<<<<< HEAD
      <Hero image={titan}>MONKESPACEPROGRAM, Inc.</Hero>
      <div className='content'>
        <h1>An Introduction to our Ship</h1>
        {
                <h2>Our craft, the Galaxy, is a maximum velocity, lightweight, cruiser able to carry 6 people comfortably. At our destinations, we create the best
                  excursion for your enjoyment and pleasure. We guarantee you a very comfortable transition to space, and an enjoyable trip, at an affordable price. 
                  Welcome to the new horizons of space tourism, MonkeSpaceProgram. {'\n'}
                  - The Founders of MSP
                </h2>
        }
=======
      {/* <Hero image={titan}>
        <h1 style={{ marginRight: 10 }}>fatty acid</h1>
      </Hero> */}
      <div className='hero-container'>
        <video autoPlay muted loop src={video}></video>
        <div className='hero'>
          <h1>Travel to Titan</h1>
          <h2>A new adventure</h2>
          <div className='hero-flex'>
            <a href='/details'>details</a>
            <a href='/home'>home</a>
          </div>
        </div>
      </div>
      <div className='content'>
        <h1>Home Page</h1>
>>>>>>> 559317cab2804f3df0f7ffe4b82d830519a9d66d
      </div>
      {'\n'}
    </Layout>
    
  );
}
