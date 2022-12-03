import './index.css';
import React from 'react';

export default function HomePage() {
  return (
    <div>
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
