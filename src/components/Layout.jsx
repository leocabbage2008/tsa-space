import React from 'react';
import '.././assets/css/Layout.css';
import { Helmet } from 'react-helmet';
import Navbar from './Navbar';
import Footer from './Footer';

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
      <Footer currentYear={currentYear} />
    </>
  );
}
