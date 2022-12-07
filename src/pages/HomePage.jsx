import React from 'react';
import Navbar from '.././components/Navbar.jsx';

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <h1>Home Page</h1>
      <span>
        <a href='/error'>error</a>
      </span>
      <span>
        <a href='/sources'>sources</a>
      </span>
      <span>
        <a href='/ref'>references</a>
      </span>
    </div>
  );
}
