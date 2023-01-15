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
              <Source title='Title Page Video'>
                <a href='https://pixabay.com/videos/world-earth-nasa-planet-globe-2/'>
                  https://pixabay.com/videos/world-earth-nasa-planet-globe-2/
                </a>
                <p>(Public Domain)</p>
              </Source>
            </li>
            <li>
              <Source title='Information'>
                <a href='https://school.eb.com/levels/high/article/Titan/72639'>
                https://school.eb.com/levels/high/article/Titan/72639
                </a>
                <p>(DataBase)</p>
              </Source>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
