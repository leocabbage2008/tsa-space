import React from 'react';
import Layout from '../components/Layout';
import video from '../assets/images/world.mp4';
// import launch from '../assets/images/launch.jpg';
import rocket from '../assets/images/rocket_transparent.png';
import '../assets/css/HomePage.css';
export default function HomePage() {
  return (
    <Layout>
      {/* <Hero image={titan}>
        <h1 style={{ marginRight: 10 }}>fatty acid</h1>
      </Hero> */}
      <div className='hero-container'>
        <video autoPlay muted loop src={video}></video>
        <div className='hero'>
          <h1>Out of this World</h1>
          <h2>Next frontier for travel</h2>
          <div className='hero-flex'>
            <a href='/details'>details</a>
            <a href='/home'>home</a>
          </div>
        </div>
      </div>
      <div className='top-block'>
        <div className='block-content'>
          <h1>
            The Future <br></br>of Travel
          </h1>
        </div>
        <div className='top-block-img-container'>
          <img src={rocket} className='top-block-img' alt='' />
        </div>
      </div>
      <div className='content'>
        <h1>Attractions</h1>
        <h2>
          Titan has a surface thats somewhat similar to Earths giving
          possibilities for rivers with methane and sand dunes in the equatorial
          regions. Be prepared for a world that seems like Earth but eerily
          different! Titan's lower gravity also allows for some great games of
          Basketball inside our visitor center but don't worry, if you are tired
          of the low gravity and the muscle atrophy that comes with it we can
          change the gravity back to what you are used to.
        </h2>
        <h2>
          --------------------------------------------------------------------------------------------------------------
        </h2>
        <h1>Locations</h1>
        <h2>
          With over 40+ locations on Titan, you can play Hockey on Titan's ice,
          Basket ball with its low gravity of .138g or unwind and relax at our
          hotel locations with artifical gravity. If you are in need of a view,
          you can set off from our Titan hiking locations and journey to some
          great locations to view Titan's Earthlike landscape or journey above
          Titan's atmosphere to get a close view of Saturn's rings.
        </h2>
      </div>
    </Layout>
  );
}
