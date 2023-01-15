import React from 'react';
import Layout from '../components/Layout';
import video from '../assets/images/world.mp4';
import launch from '../assets/images/launch.jpg';
import '../assets/css/HomePage.css';
// https://commons.wikimedia.org/wiki/File:Polar_Vortex_in_Color.jpg
export default function HomePage() {
  return (
    <Layout>
      {/* <Hero image={titan}>
        <h1 style={{ marginRight: 10 }}>fatty acid</h1>
      </Hero> */}
      <div className='hero-container'>
        <video autoPlay muted loop src={video}></video>
        <div className='hero'>
          <h1>Travel to Titan</h1>
          <h2>A new frontier in travel</h2>
          <div className='hero-flex'>
            <a href='/details'>details</a>
            <a href='/home'>home</a>
          </div>
        </div>
      </div>
      <div className='left-block'>
        <div className='left-block-background' />
        <div className='block-content'>
          <h1>Step into the future of travel with our space packages</h1>
        </div>
        <div className='block-img-container'>
          <img src={launch} className='block-img' alt='' />
        </div>
      </div>
      <div className='content'>
        <h1>Home Page</h1>
        <h1>An Introduction to our Ship</h1>
        <h2>
          Our craft, the Galaxy, is a maximum velocity, lightweight, cruiser
          able to carry 6 people comfortably. At our destinations, we create the
          best excursion for your enjoyment and pleasure. We guarantee you a
          very comfortable transition to space, and an enjoyable trip, at an
          affordable price. Welcome to the new horizons of space tourism,
          MonkeSpaceProgram. {'\n'}- The Founders of MSP
        </h2>
      </div>
      {'\n'}
    </Layout>
  );
}
