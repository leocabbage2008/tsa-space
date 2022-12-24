import React from 'react';
import '.././assets/css/Footer.css';
import space from '../assets/images/space.jpg';

export default function Footer({ currentYear }) {
  return (
    <footer>
      <a href='/' className='footer-logo-link'>
        <img className='footer-logo' src={space} alt='' />
      </a>
      <ul className='sitemap-container'>
        <li className='sitemap'>
          <p>Information</p>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/details'>Details About Launch</a>
            </li>
            <li>
              <a href='/sources'>Sources</a>
            </li>
            <li>
              <a href='/docs'>Documentation</a>
            </li>
          </ul>
        </li>
        <li className='sitemap'>
          <p>Contact</p>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/details'>Details About Launch</a>
            </li>
            <li>
              <a href='/sources'>Sources</a>
            </li>
            <li>
              <a href='/docs'>Documentation</a>
            </li>
          </ul>
        </li>
        <li className='sitemap'>
          <p>Login</p>
          <ul>
            <li>
              <a href='/login'>Login</a>
            </li>
            <li>
              <a href='/register'>Register</a>
            </li>
            <li>
              <a href='/book'>Book Flights</a>
            </li>
          </ul>
        </li>
      </ul>
      <div className='footer-right float-right'>
        <p>hello</p>
        <p>hello</p>
        <p>hello</p>
        <p>{currentYear}</p>
      </div>
    </footer>
  );
}
