import React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import titan from '../assets/images/titan.webp';
// https://commons.wikimedia.org/wiki/File:Polar_Vortex_in_Color.jpg
export default function HomePage() {
  return (
    <Layout>
      <Hero text='hmm quite spacey' image={titan} />
      <div className='content'>
        <h1>Home Page</h1>
        {/* <ul>
          <li>
            <a href='/error'>error</a>
          </li>
          <li>
            <a href='/sources'>sources</a>
          </li>
          <li>
            <a href='/ref'>references</a>
          </li>
          <li>
            <a href='/details'>details</a>
          </li>
        </ul> */}
      </div>
    </Layout>
  );
}
