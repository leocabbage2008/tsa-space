import React, { useState } from 'react';
import space from '.././assets/images/space.jpg';
import '.././assets/css/Navbar.css';
import classNames from 'classnames';

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const toggle = () => {
    document.body.style.overflow = document.getElementById(
      'root'
    ).style.overflowY = sidebar ? 'scroll' : 'hidden';
    setSidebar(!sidebar);
  };
  return (
    <>
      <div className={classNames('tint', { 'active-tint': sidebar })} />
      <nav>
        <a href='/' className='logo-link'>
          <img className='logo' src={space} alt='' />
        </a>
        <div className='nav-container'>
          <ul className='nav-links'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/Details'>Details</a>
            </li>
            <li>
              <a href='/sources'>Sources</a>
            </li>
          </ul>
          <button
            className={classNames('burger', { 'active-burger': sidebar })}
            onClick={toggle}
          >
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
          </button>
        </div>
      </nav>
      <div className={classNames('sidebar', { active: sidebar })}>
        <ul className='sidebar-links'>
          <li>
            <a href='/ref'>Ref</a>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <hr />
          </li>
          <li>
            <a href='/'>About</a>
          </li>
        </ul>
      </div>
      <div
        className={classNames('sidecover', { 'sidecover-active': sidebar })}
      />
    </>
  );
}
