import React from 'react';
import '.././assets/css/Layout.css';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout({
  children,
  title,
  height = '1000px',
  contentHeight = '',
}) {
  //for footer
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Helmet>
        <title>{title ? title : 'MonkeSpaceProgram'}</title>
      </Helmet>
      <Navbar />
      <div id='main' style={{ height: contentHeight }}>
        {children}
      </div>
      <div style={{ height: height }} />
      <Footer currentYear={currentYear} />
      <ScrollToTop />
    </>
  );
}
