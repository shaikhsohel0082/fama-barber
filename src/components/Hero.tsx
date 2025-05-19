
import React, { useEffect } from 'react';

const Hero = () => {
  useEffect(() => {
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroBtn = document.querySelector('.hero-btn');

    if (heroTitle) heroTitle.classList.add('fade-in');
    if (heroSubtitle) {
      setTimeout(() => {
        heroSubtitle.classList.add('fade-in');
      }, 500);
    }
    if (heroBtn) {
      setTimeout(() => {
        heroBtn.classList.add('fade-in');
      }, 1000);
    }
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h2 className="hero-subtitle">Welcome to</h2>
        <h1 className="hero-title">Fama barber shop and Unisex beauty salon</h1>
        <p>Costly compare to other babershops with better haircuts</p>
        <a href="#contact" className="btn hero-btn">Book an Appointment</a>
      </div>

      <style>
        {`
        .hero {
          height: 100vh;
          width: 100%;
          background-image: url('https://images.unsplash.com/photo-1622286342621-4bd786a3d7cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: var(--light);
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.7);
        }
        
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 800px;
          padding: 0 20px;
        }
        
        .hero-title {
          font-size: 5rem;
          font-weight: 700;
          margin-bottom: 20px;
          opacity: 0;
        }
         
        .hero-subtitle {
          font-size: 1.5rem;
          color: var(--gold);
          margin-bottom: 10px;
          letter-spacing: 3px;
          text-transform: uppercase;
          opacity: 0;
        }
        
        .hero-content p {
          font-size: 1.2rem;
          margin-bottom: 30px;
        }
        
        .hero-btn {
          opacity: 0;
        }
        
        @media (max-width: 768px) {
          .hero-title {
            font-size: 3.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.2rem;
          }
          
          .hero-content p {
            font-size: 1rem;
          }
        }
        `}
      </style>
    </section>
  );
};

export default Hero;
