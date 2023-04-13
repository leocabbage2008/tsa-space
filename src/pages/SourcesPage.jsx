import React from 'react';
import Layout from '../components/Layout';
import Source from '../components/Source';
import '../assets/css/SourcesPage.css';
export default function SourcesPage() {
  return (
    <Layout>
      <div className='content'>
        <h1>Sources Page</h1>
        <div id='sources'>
          <Source title='Home Page Videos'>
            <a href='https://pixabay.com/videos/world-earth-nasa-planet-globe-2/'>
              https://pixabay.com/videos/world-earth-nasa-planet-globe-2/
            </a>
            <p>
              (Public Domain)
              <br />
            </p>
            <a href='https://pixabay.com/photos/cape-canaveral-florida-space-shuttle-79355/'>
              https://pixabay.com/photos/cape-canaveral-florida-space-shuttle-79355/
            </a>
            <p>(Public Domain)</p>
          </Source>
          <Source title='Information'>
            <a href='https://school.eb.com/levels/high/article/Titan/72639'>
              https://school.eb.com/levels/high/article/Titan/72639
            </a>
            <p>
              <br />
            </p>
            <a href='https://en.wikipedia.org/wiki/Titan_(moon)'>
              https://en.wikipedia.org/wiki/Titan_(moon)
            </a>
            <p>
              <br />
            </p>
            <a href='https://en.wikipedia.org/wiki/Mars'>
              https://en.wikipedia.org/wiki/Mars
            </a>
            <br />
            <a href='https://solarsystem.nasa.gov/planets/neptune/overview/'>
              https://solarsystem.nasa.gov/planets/neptune/overview/
            </a>
          </Source>
          <Source title='Icons'>
            <a href='https://feathericons.com'>https://feathericons.com</a>
            <p>(Public Domain)</p>
          </Source>
          <Source title='Fonts'>
            <a href='https://fonts.google.com/specimen/Merriweather/about'>
              Merriweather
            </a>
            <p>(SIL Open Font License)</p>
            <br />
            <a href='https://fonts.google.com/specimen/Mulish/about'>Mulish</a>
            <p>(SIL Open Font License)</p>
            <br />
            <a href='https://fonts.google.com/specimen/Staatliches/about'>
              Staatliches
            </a>
            <p>(SIL Open Font License)</p>
          </Source>
          <Source title='Home page pictures'>
            <a href='https://solarsystem.nasa.gov/moons/saturn-moons/titan/overview/'>
              Titan
            </a>
            <p>(Public Domain)</p>
            <br />
            <a href='https://solarsystem.nasa.gov/planets/mars/overview/'>
              Mars
            </a>
            <p>(Public Domain)</p>
            <br />
            <a href='https://solarsystem.nasa.gov/planets/neptune/overview/'>
              Neptune
            </a>
            <p>(Public Domain)</p>
          </Source>
          <Source title='Titan Pictures'>
            <a href='https://solarsystem.nasa.gov/resources/16089/titans-subsurface-reservoirs-annotated/'>
              Image of Titan's surface layers
            </a>
            <p>(Public Domain)</p>
            <br />
          </Source>
          <Source title='About Us page pictures'>
            <a href='https://unsplash.com/photos/Q1p7bh3SHj8'>
              Image of Earth from outer space
            </a>
            <p>(Public Domain)</p>
            <br />
          </Source>
        </div>
      </div>
    </Layout>
  );
}
