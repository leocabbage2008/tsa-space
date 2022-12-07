import React, { useState } from 'react';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [menu, setMenu] = useState(false);
  const toggler = () => {
    setToggle(!toggle);
    setMenu(!menu);
  };
  return (
    <>
      <header id='header'>
        <nav class='nav'>
          <button
            class={'toggle-menu' + toggle ? ' active' : ''}
            onClick={toggler}
          >
            <span></span>
          </button>
        </nav>
      </header>

      <div id='menu' class={menu ? 'open' : ''}>
        <nav class='main-nav'>
          <ul>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Pricing</a>
            </li>

            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
