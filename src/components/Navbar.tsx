
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <h1>Fama<span>Barber</span></h1>
        </Link>
        <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setMobileMenuOpen(false)}>{t('home')}</a></li>
            <li><a href="#about" onClick={() => setMobileMenuOpen(false)}>{t('about')}</a></li>
            <li><a href="#services" onClick={() => setMobileMenuOpen(false)}>{t('services')}</a></li>
            <li><a href="#gallery" onClick={() => setMobileMenuOpen(false)}>{t('gallery')}</a></li>
            <li><a href="#team" onClick={() => setMobileMenuOpen(false)}>{t('team')}</a></li>
            <li><a href="#faq" onClick={() => setMobileMenuOpen(false)}>{t('faq')}</a></li>
            <li><a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t('contact')}</a></li>
          </ul>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <style>
        {`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 20px 5%;
          z-index: 1000;
          transition: all 0.3s ease;
        }
        
        .navbar.scrolled {
          background-color: var(--dark);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
          padding: 15px 5%;
        }
        
        .navbar-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .logo h1 {
          font-size: 1.8rem;
          color: var(--light);
          font-weight: 700;
        }
        
        .logo span {
          color: var(--gold);
        }
        
        .navbar-links ul {
          display: flex;
          list-style: none;
        }
        
        .navbar-links li {
          margin-left: 30px;
        }
        
        .navbar-links a {
          color: var(--light);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .navbar-links a:hover {
          color: var(--gold);
        }
        
        .navbar-links a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -5px;
          left: 0;
          background-color: var(--gold);
          transition: width 0.3s ease;
        }
        
        .navbar-links a:hover::after {
          width: 100%;
        }
        
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
        }
        
        .hamburger span {
          width: 25px;
          height: 2px;
          background-color: var(--light);
          margin: 4px 0;
          transition: all 0.3s ease;
        }
        
        @media (max-width: 768px) {
          .navbar-links {
            position: fixed;
            top: 0;
            right: -100%;
            width: 70%;
            height: 100vh;
            background-color: var(--dark);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            transition: all 0.5s ease;
            z-index: 999;
          }
          
          .navbar-links.active {
            right: 0;
          }
          
          .navbar-links ul {
            flex-direction: column;
            align-items: center;
          }
          
          .navbar-links li {
            margin: 20px 0;
          }
          
          .hamburger {
            display: flex;
            z-index: 1000;
          }
        }
        `}
      </style>
    </nav>
  );
};

export default Navbar;
