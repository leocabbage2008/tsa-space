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
          <ul>
            <li>
              <Source title='Title Page Videos'>
                <a href='https://pixabay.com/videos/world-earth-nasa-planet-globe-2/'>
                  https://pixabay.com/videos/world-earth-nasa-planet-globe-2/
                </a>
                <p>(Public Domain)<br/></p>
                <a href='https://pixabay.com/photos/cape-canaveral-florida-space-shuttle-79355/'>
                  https://pixabay.com/photos/cape-canaveral-florida-space-shuttle-79355/
                </a>
                <p>(Public Domain)</p>
              </Source>
            </li>
            <li>
              <Source title='Information'>
                <a href='https://school.eb.com/levels/high/article/Titan/72639'>
                https://school.eb.com/levels/high/article/Titan/72639
                </a>
                <p>(Database Article)<br/></p>
                <a href='https://en.wikipedia.org/wiki/Titan_(moon)'>
                https://en.wikipedia.org/wiki/Titan_(moon)
                </a>
                <p>(Online Article)<br/></p>
                <a href='https://en.wikipedia.org/wiki/Mars'>
                https://en.wikipedia.org/wiki/Mars
                </a>
                <p>(Online Article)</p>
              </Source>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
