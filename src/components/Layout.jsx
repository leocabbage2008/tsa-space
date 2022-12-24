import React from 'react';
import '.././assets/css/Layout.css';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';

export default function Layout({ children, title }) {
  //for footer
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Helmet>
        <title>{title ? title : 'NAME HERE'}</title>
      </Helmet>
      <Navbar />
      <div id='main'>{children}</div>
      <div style={{ height: '1000px' }} />
      <footer>
        <div>
          <p>Sitemap</p>
          <ul>
            <a href='/'>#</a>
            <a href='/'>#</a>
            <a href='/'>#</a>
            <a href='/'>#</a>
          </ul>
        </div>
        <div className='footer-right float-right'>
          <p>hello</p>
          <p>hello</p>
          <p>hello</p>
          <p>{currentYear}</p>
        </div>
      </footer>
    </>
  );
}

//DON'T FORGET TO ADDD HELMET LATER KID
