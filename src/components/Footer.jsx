import React from 'react';
import '.././assets/css/Footer.css';
import logo from '../assets/images/logo.png';

export default function Footer({ currentYear }) {
  return (
    <footer>
      <a href='/' className='footer-logo-link' aria-label='Logo'>
        <img
          className='footer-logo'
          src={logo}
          alt=''
          height='100'
          width='100'
        />
      </a>
      <ul className='sitemap-container'>
        <li className='sitemap'>
          <p>INFORMATION</p>
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
              <a
                target='_blank'
                href='https://docs.google.com/document/d/1GkyOmS3XiS2-MTWXF16Yxd9iBi2tKIA-yRvtdHKvGUk/export?format=pdf' //https://drive.google.com/file/d/1jCtR5-p1o4F2Y_4SVklmRieCoTfL-xr8/view?usp=sharing' 
                rel='noreferrer'
              >
                Documentation
              </a>
            </li>
          </ul>
        </li>
        <li className='sitemap'>
          <p>PLANETS</p>
          <ul>
            <li>
              <a href='/login'>Titan</a>
            </li>
            <li>
              <a href='/register'>Mars</a>
            </li>
            <li>
              <a href='/book'>Neptune</a>
            </li>
          </ul>
        </li>
        <li className='sitemap'>
          <p>CONTACT</p>
          <ul>
            <li>
              <a
                target='_blank'
                href='https://twitter.com/MSPSpaceProgram'
                rel='noreferrer'
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                target='_blank'
                href='https://www.facebook.com/profile.php?id=100089635383990'
                rel='noreferrer'
              >
                Facebook
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div className='footer-right'>
        <ul>
          <li>
            <a
              target='_blank'
              href='https://drive.google.com/file/d/1tU38kRrT3hxlaFLc6BEMdUR2M-Yy5cN3/view?usp=sharing'
              rel='noreferrer'
            >
              Terms of Use
            </a>
          </li>
          <li>
            <a
              href='https://drive.google.com/file/d/1CDPfxqsO49jxIL_SeI917-Tda0uLDcXz/view?usp=sharing'
              target='_blank'
              rel='noreferrer'
            >
              Privacy Policy
            </a>
          </li>
          <li className='copyright'>
            <p>©{currentYear} MSP</p>
          </li>
        </ul>
      </div>
    </footer>
  );
}
