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
  useEffect(() => {
    const onScroll = () => {
      let test = document.getElementsByClassName('scrollToTop')[0];
      test.style.transform =
        'translate(calc(100vw - 36px - 10px),' +
        (window.scrollY -
          document.body.scrollHeight +
          window.innerHeight -
          10) +
        'px)';
      console.log(test.style.transform);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const goToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <>
      <div className={classNames('scrollToTop', { visible: visible })}>
        <button className='scrollToTopButton'>
          <ChevronsUp onClick={goToTop} />
        </button>
      </div>
    </>
  );
}
