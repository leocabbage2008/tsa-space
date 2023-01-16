import React, { useState, useEffect, createRef } from 'react';
import Layout from '../components/Layout';
import '.././assets/css/DetailsPage.css';
import scene from '../assets/glb/build.gltf';
import hdr from '../assets/glb/hdr.hdr';
import '../assets/css/index.css';
import shipFull from '../assets/images/ship_full.webp';
import shipInner from '../assets/images/ship_inner.webp';
import cockpit from '../assets/images/cockpit2.webp';
import computerStation from '../assets/images/computer_station.webp'
import movieStation from '../assets/images/movie_station.webp';
import diningArea from '../assets/images/dining_area.webp';
import observationStation from '../assets/images/observation_station.webp';
import { ReactComponent as DownArrow } from '../assets/svg/down_arrow.svg';

export default function DetailsPage() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollPositions = [
    // startsVisible: if starts opacity 1, start: position to start fade in, fadeIn: scroll length to go from opacity 0 to 1
    // end: position to start fade out, fadeOut: scroll length to go from opacity 1 to 0
    // class: instead of fade, add a class with animation
    { startsVisible: true, start: 0, end: 200, fadeOut: 200 }, // model viewer
    { startsVisible: true, start: 0, end: 200, fadeOut: 200 }, // title
    { startsVisible: false, start: 300, fadeIn: 200, end: 1600, fadeOut: 200 }, // ship full image
    { startsVisible: false, start: 600, class: 'appear', end: 1200 }, // text 1
    // { startsVisible: false, start: 650, class: 'expand', end: 1200 }, // length line
    // { startsVisible: false, start: 700, class: 'expand', end: 1200 }, // width line
    { startsVisible: false, start: 1400, fadeIn: 150, end: 2200, fadeOut: 200 }, // ship inner
    { startsVisible: false, start: 1600, class: 'appear', end: 1800 }, // text 2
    { startsVisible: false, start: 2200, fadeIn: 200, end: 2800, fadeOut: 200}, // cockpit
    { startsVisible: false, start: 2400, class: 'appear', end: 2800 }, // text 3
    { startsVisible: false, start: 2800, fadeIn: 200, end: 3800, fadeOut: 200}, // computer station
    { startsVisible: false, start: 3200, class: 'appear', end: 3800 }, // text 4
    { startsVisible: false, start: 3800, fadeIn: 200, end: 4800, fadeOut: 200}, // movie station
    { startsVisible: false, start: 4200, class: 'appear', end: 4800 }, // text 5
    { startsVisible: false, start: 4800, fadeIn: 200, end: 5800, fadeOut: 200}, // dining area
    { startsVisible: false, start: 5200, class: 'appear', end: 5800 }, // text 6
    { startsVisible: false, start: 5800, fadeIn: 200, end: 6800, fadeOut: 200}, // observation station
    { startsVisible: false, start: 6300, class: 'appear', end: 6800 }, // observation text
    { startsVisible: false, start: 6200, class: 'appear', end: 6800 }, // text 7
    // { startsVisible: false, start: 6800, fadeIn: 200, end: 8000, fadeOut: 0}, // final text
    { startsVisible: false, start: 6800, fadeIn: 200, end: 8000, fadeOut: 0},
  ]

  const items = document.getElementsByClassName('scroll');

  useEffect(() => {
    setScrollPosition(window.scrollY);
  }, []);

  const scrollText = createRef();
  const arrow = createRef();

  const handleScroll = () => {
    const position = window.pageYOffset;
    // setScrollPosition(position);

    scrollText.current.style.transform = `translate(-50%, ${position / 15}px)`
    arrow.current.style.transform = `translate(-50%, ${position / 5}px)`

    for (let i = 0; i < scrollPositions.length; i++) {
      if (i < items.length) {
        let current = scrollPositions[i];

        if (current.class) { // add class mode
          if (items[i].classList.contains(current.class)) {
            if (position < current.start || position > current.end) {
              items[i].classList.remove(current.class);
            }
          } else {
            if (position >= current.start && position <= current.end) {
              items[i].classList.add(current.class);
              
            }
          }
        } else { // fade mode
          if (position < current.start + current.fadeIn) {
            if (current.startsVisible) {
              items[i].style.opacity = 1;
            } else {
              items[i].style.opacity = (position - current.start) / current.fadeIn;
            }
          } else if (position > current.end) {
            items[i].style.opacity = 1 - (position - current.end) / current.fadeOut;
          } else {
            items[i].style.opacity = 1;
          }

          if (items[i].style.opacity < 0) {
            items[i].style.display = 'none';
          } else {
            items[i].style.display = 'initial';
          }
        }
      }
    }
  };
  const body = document.body,
    html = document.documentElement;
  const scrollLimit = Math.max( body.scrollHeight, body.offsetHeight, 
    html.clientHeight, html.scrollHeight, html.offsetHeight ) - window.innerHeight;

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });

      handleScroll()

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  });

  return (
    <Layout height='8000px' contentHeight='0px'>
      <div className='all'>
        {/* <p style={{ position: 'fixed', color: 'gray', zIndex: '10', bottom: '0', fontSize: '1em'}}>
          for debug: {scrollPosition} {scrollLimit}
        </p> */}

        <div className='scroll'> 
          <model-viewer
            src={scene}
            exposure='1'
            skybox-image={hdr}
            auto-rotate
            touch-action='none'
            min-camera-orbit='auto 0deg auto'
            max-camera-orbit='auto 90deg auto'
            loading='eager'
            disable-zoom
            camera-controls
          ></model-viewer>

          <p className="fixed centerX" id="scrollText" ref={scrollText}>Scroll</p>
          <DownArrow 
            width="5em" 
            color="white" 
            className="fixed centerX" 
            id="arrow"
            ref={arrow}
          ></DownArrow>
        </div>
        
        <div className='scroll' id='centerText'>
          <h1 className='title center fixed clickThrough'>Meet the Ride</h1>
          {/* <div className='silluoette'></div> */}
        </div>

        <img src={shipFull} alt='whole ship' className='scroll centerX resize' />
        <div className='scroll container background' id='section1'>
          <p>The main body of the ship spans 78 feet long and 20 feet wide, providing plenty of space to enjoy the experience.</p>
        </div>
        {/* <div className='scroll' id='lengthLine'>
          <p className='label'>78 ft</p>
        </div>
        <div className='scroll' id='widthLine'>
          <p className='label'>20 ft</p>
        </div> */}
        
        <img src={shipInner} alt='inner ship' className='scroll centerX resize' />
        <div className='scroll container' id='section2'>
          <p>The inside of the ship is split into 6 rooms, each with features built in for the comfort of our passengers.</p>
        </div>

        <img src={cockpit} alt='cockpit' className='scroll centerX resize' />
        <div className='scroll container background'>
          <p>The cockpit holds 3 of our highly trained and experienced pilots, ensuring your safety and comfort throughout the journey.</p>
        </div>

        <img src={computerStation} alt='computer station' className='scroll centerX resize' />
        <div className='scroll container background'>
          <p>The computer station uses our patented screen embeded in the windows. Free internet access allows you to surf the web with a backdrop of space. </p>
        </div>

        <img src={movieStation} alt='movie station' className='scroll centerX resize2' />
        <div className='scroll container background' id='section3'>
          <p>The movie station allows you to watch any movie on our custom wide screen, and will also be the dashboard providing information during launch off. </p>
        </div>

        <img src={diningArea} alt='dining area' className='scroll centerX resize' />
        <div className='scroll container background'>
          <p>The dining area provides a comfortable area to converse and dine. As for food, we have an onsite kitchen and grow vegetables there.</p>
        </div>

        <div id='observationImageContainer'>
          <img src={observationStation} alt='observation station' className='scroll centerX resize' />
          <div className='scroll' id='observationText'>
            <p className='label'>Titan</p>
            <hr className='label'></hr>
            <p className='label'>Titan, the largest moon of Saturn and the only moon in the solar system known to have clouds and a dense atmosphere. It is the only body... → </p>
            <p className='label'><i>From Britannica</i></p>
          </div>
        </div>
        <div className='scroll container background'>
          <p>Also in the dining area, two interactive observation stations provide information about passing astrological features.</p>
        </div>

        <div className='scroll center'>
          <h2>Ready to fly with us?</h2>
          <p>Book Now</p>
        </div>
      </div>
    </Layout>
  );
}
