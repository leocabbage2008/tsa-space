import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import titan from '../assets/images/titan.png';
// https://commons.wikimedia.org/wiki/File:Polar_Vortex_in_Color.jpg
export default function HomePage() {
  return (
    <Layout>
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
      </div>
      {'\n'}
    </Layout>
    
  );
}
