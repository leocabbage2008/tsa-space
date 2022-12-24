import React, { useState } from 'react';
import space from '.././assets/images/space.jpg';
import classNames from 'classnames';

export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [hamburger, setHamburger] = useState(false);
  const toggle = () => {
    setSidebar(!sidebar);
    setHamburger(!hamburger);
    if (document.body.style.overflow === 'hidden')
      document.body.style.overflow = 'visible';
    else document.body.style.overflow = 'hidden';
  };
  return (
    <>
      <nav>
        <a href='/' className='logo-link'>
          <img className='logo' src={space} alt='' />
        </a>
        <ul className='nav-links'>
          <li>
            <a href='/error'>Page 1</a>
          </li>
          <li>
            <a href='/sources'>Page 2</a>
          </li>
          <li>
            <a href='/'>Page 3</a>
          </li>
        </ul>
        <button
          className={classNames('burger', { 'active-burger': hamburger })}
          onClick={toggle}
        >
          <div className='line1'></div>
          <div className='line2'></div>
          <div className='line3'></div>
        </button>
      </nav>
      <div className={classNames('sidebar', { active: sidebar })}>
        <ul className='sidebar-links'>
          <li>
            <a href='/ref'>ref!</a>
          </li>
          <li>
            <a href='/'>home</a>
          </li>
        </ul>
      </div>
    </>
  );
}
