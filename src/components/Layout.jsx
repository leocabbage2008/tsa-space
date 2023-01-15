import React from 'react';
import '.././assets/css/Layout.css';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout({ children, title, height = '0px' }) {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Helmet>
        <title>{title ? title : 'MonkeSpaceProgram'}</title>
      </Helmet>
      <Navbar />
      <div id='main' style={height === '0px' ? {} : { minHeight: '0px' }}>
        {children}
      </div>
      <div style={{ height: height }} />
      <Footer currentYear={currentYear} />
      <ScrollToTop />
    </>
  );
}
