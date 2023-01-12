import React from 'react';

export default function Source({ title, citation }) {
  return (
    <div className='title'>
      {title}
      <div className='citation'>{citation}</div>
    </div>
  );
}
