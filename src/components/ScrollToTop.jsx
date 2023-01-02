import React, { useState, useEffect } from 'react';
import '.././assets/css/ScrollToTop.css';
import { ReactComponent as ChevronsUp } from '../assets/svg/chevrons-up.svg';
import classNames from 'classnames';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setVisible(window.scrollY > 100);
    });
    return () =>
      window.removeEventListener('scroll', () => {
        setVisible(window.scrollY > 100);
      });
  }, []);
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <button className={classNames('scrollToTop', { visible: visible })}>
        <ChevronsUp onClick={goToTop} />
      </button>
    </>
  );
}
