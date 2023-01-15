import classNames from 'classnames';
import React, { useState, useRef } from 'react';
import '../assets/css/Source.css';

export default function Source({ title, children }) {
  const content = useRef();
  const [isActive, setIsActive] = useState(false);
  return (
    <div className='accordion'>
      <div onClick={() => setIsActive(!isActive)} className='accordion-title'>
        <p>{title}</p>
        <span>{isActive ? '-' : '+'}</span>
      </div>
      <div
        ref={content}
        style={
          isActive ? { height: content.current.scrollHeight } : { height: 0 }
        }
        className={classNames('accordion-content', {
          'accordion-content-active': isActive,
        })}
      >
        <div className='padder'>{children}</div>
      </div>
    </div>
  );
}
