import React from 'react';
import Layout from '../components/Layout';
import '../assets/css/AboutPage.css';
import banner from '../assets/images/aboutusbanner.png';

export default function AboutPage() {
  return (
    <Layout>
      <div className='banner-container'>
        <img className='banner' src={banner} alt='' />
        <div className='content'>
          <h1 className='about-us-title'>ABOUT US</h1>
          <h2>
            Our space tourism company, MSP ("Monke Space Programs"), is
            dedicated to providing our customers with the ultimate space travel
            experience. We offer a wide range of space travel options, from
            suborbital joyrides to extended orbital vacations at other planets.
          </h2>
          <br />
          <h2>
            From the moment you leave the Earth's atmosphere, you'll be able to
            witness the breathtaking views of our planet, the stars, and the
            vast expanse of space.
          </h2>
          <br />
          <h2>
            So join us and embark on a journey of a lifetime, as you explore the
            mysteries of space with MSP.
          </h2>
        </div>
      </div>
    </Layout>
  );
}
