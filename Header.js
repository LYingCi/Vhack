import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <div className={`header ${isVisible ? 'visible' : 'hidden'}`}>
      <img src={logo} alt="logo" className="header-icon" />
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Organic">Organic</Link>
        </li>
        <li>
          <Link to="/Vertical">Vertical</Link>
        </li>
        <li>
          <Link to="/Dripper">Solar Dripper</Link>
        </li>
        <li>
          <Link to="/review">Review</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
