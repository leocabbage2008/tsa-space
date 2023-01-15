import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import '.././assets/css/DetailsPage.css';
import scene from '../assets/glb/build1.gltf';
import hdr from '../assets/glb/hdr.hdr';
import shipFull from '../assets/images/ship_full.webp';
import shipInner from '../assets/images/ship_inner.webp';

export default function DetailsPage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollPositions = [
    // startsVisible: if starts opacity 1, start: position to start fade in, fadeIn: scroll length to go from opacity 0 to 1
    // end: position to start fade out, fadeOut: scroll length to go from opacity 1 to 0
    { startsVisible: true, start: 0, end: 1600, fadeOut: 200 }, // ship full image
    { startsVisible: true, start: 0, end: 200, fadeOut: 200 }, // title
    { startsVisible: false, start: 600, fadeIn: 200, end: 1000, fadeOut: 200 }, // text 1
    { startsVisible: false, start: 1600, fadeIn: 200, end: 2200, fadeOut: 200 }, // ship inner
    { startsVisible: false, start: 2200, fadeIn: 200, end: 2800, fadeOut: 200 }, // text 2
  ];

  const items = document.getElementsByClassName('scroll');

  useEffect(() => {
    setScrollPosition(window.scrollY);
  }, []);

  const handleScroll = () => {
    const position = window.pageYOffset;
    // setScrollPosition(position);

    for (let i = 0; i < scrollPositions.length; i++) {
      if (i < items.length) {
        let current = scrollPositions[i];
        if (position < current.start + current.fadeIn) {
          console.log(items[i], current);
          if (current.startsVisible) {
            items[i].style.opacity = 1;
          } else {
            items[i].style.opacity =
              (position - current.start) / current.fadeIn;
          }
        } else if (position > current.end) {
          items[i].style.opacity =
            1 - (position - current.end) / current.fadeOut;
        } else {
          items[i].style.opacity = 1;
        }
      }
    }
  };
  const body = document.body,
    html = document.documentElement;
  const scrollLimit =
    Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    ) - window.innerHeight;

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <Layout height='5000px' contentHeight='0px'>
      <p style={{ position: 'fixed', color: 'gray' }}>
        for debug: {scrollPosition} {scrollLimit}
      </p>
      <img src={shipFull} alt='whole ship' className='scroll centerX' />
      <div className='scroll' id='centerText'>
        <div className='silluoette'></div>
        <h1 className='title'>Meet the Ride</h1>
      </div>
      <div className='scroll'>
        <h2>wiejiwjefio</h2>
        <p>Titan </p>
      </div>
      <img src={shipInner} alt='inner ship' className='scroll centerX' />
      <model-viewer
        class='scroll'
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
    </Layout>
  );
}
