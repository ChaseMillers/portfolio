import React, { useEffect, useRef, useState } from 'react';
import './stickyHelper.css'
import Menu from '../menu/Menu'

const StickyHeader = () => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current){
    setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  return (
    <div className={`sticky-wrapper${isSticky ? ' sticky' : ''}`} ref={ref}>
    <Menu />
    </div>
  );
};

export default StickyHeader