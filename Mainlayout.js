import React, { useState, useEffect } from 'react';
import Header from '../component/Header';
import './Mainlayout.css';

function Mainlayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 50; // Adjust this value to change when the header appears
      setIsScrolled(scrollTop > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <Header className={isScrolled ? 'scrolled' : ''}></Header>
      <div>{children}</div>
    </div>
  );
}

export default Mainlayout;
