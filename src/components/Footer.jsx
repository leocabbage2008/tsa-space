import React from 'react';
import '.././assets/css/Footer.css';
import space from '../assets/images/space.webp';

export default function Footer({ currentYear }) {
  return (
    <footer>
      <a href='/' className='footer-logo-link' aria-label='Logo'>
        <img
          className='footer-logo'
          src={space}
          alt=''
          height='100'
          width='100'
        />
      </a>
      <ul className='sitemap-container'>
        <li className='sitemap'>
          <p>Information</p>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/details'>Details</a>
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
              <a href='/book'>Flights</a>
            </li>
          </ul>
        </li>
        <li className='sitemap'>
          <p>Contact</p>
          <ul>
            <li>
              <a target='_blank' href='https://twitter.com/MSPSpaceProgram' rel='noreferrer'>
                Twitter
              </a>
            </li>
            <li>
              <a target='_blank' href='https://facebook.com' rel='noreferrer'>
                Facebook
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className='footer-right'>
        <ul>
          <li>
            <a target='_blank' href = "" rel='noreferrer'>
              Terms of Service
            </a>
          </li>
          <li>
            <a href='https://docs.google.com/document/d/1Yia5kfyCgx9FtaNo6Xi09xQ6K_fN3q5_xo5ARrrwrvc/edit?usp=sharing' target='_blank' rel='noreferrer'>
              Privacy Policy
            </a>
          </li>
          <li>
            <p>©{currentYear} MSP</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}
