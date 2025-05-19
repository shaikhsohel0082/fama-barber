
import React, { useEffect, useRef } from 'react';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const aboutElements = aboutRef.current?.querySelectorAll('.animate');
    
    if (aboutElements) {
      aboutElements.forEach(el => {
        observer.observe(el);
      });
    }

    return () => {
      if (aboutElements) {
        aboutElements.forEach(el => {
          observer.unobserve(el);
        });
      }
    };
  }, []);

  return (
    <section id="about" className="about section-padding" ref={aboutRef}>
      <div className="about-container">
        <div className="about-text">
          <p className="subtitle animate">Our Story</p>
          <h2 className="section-title animate">Premium Barbershop Since 2015</h2>
          <p className="about-description animate">
            Fama Barber and beauty salon was founded with a vision to provide exceptional grooming services in an atmosphere that blends 
            traditional barbering techniques with modern style. Our skilled barbers have years of experience and a passion 
            for their craft, ensuring you leave looking and feeling your best.
          </p>
          <p className="about-description animate">
            We believe that a visit to the barber should be more than just a haircut – it should be an experience. 
            From hot towel treatments to precision beard trimming, every service is performed with meticulous attention 
            to detail in our contemporary yet classic environment.
          </p>
          <div className="about-features animate">
            <div className="feature">
              <div className="feature-icon">✓</div>
              <div className="feature-text">
                <h3>Expert Barbers</h3>
                <p>Our team consists of experienced professionals who are masters of their craft.</p>
              </div>
            </div>
            <div className="feature">
              <div className="feature-icon">✓</div>
              <div className="feature-text">
                <h3>Premium Products</h3>
                <p>We use only the highest quality grooming products for optimal results.</p>
              </div>
            </div>
          </div>
          <a href="#services" className="btn animate">Explore Services</a>
        </div>
        <div className="about-image animate">
          <img src="https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" alt="Barber Shop Interior" />
        </div>
      </div>
      
      <style>
        {`
        .about {
          background-color: var(--light);
          color: var(--dark);
        }
        
        .about-container {
          display: flex;
          gap: 50px;
        }
        
        .about-text {
          flex: 1;
        }
        
        .about-image {
          flex: 1;
          position: relative;
        }
        
        .about-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border: 5px solid var(--gold);
        }
        
        .about-description {
          margin-bottom: 20px;
          line-height: 1.6;
        }
        
        .about-features {
          margin: 30px 0;
        }
        
        .feature {
          display: flex;
          margin-bottom: 20px;
        }
        
        .feature-icon {
          flex: 0 0 40px;
          height: 40px;
          background-color: var(--gold);
          color: var(--dark);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          margin-right: 15px;
        }
        
        .feature-text h3 {
          margin-bottom: 5px;
          font-size: 1.1rem;
        }
        
        .feature-text p {
          font-size: 0.9rem;
          color: var(--gray);
        }
        
        .animate {
          opacity: 0;
          transform: translateY(30px);
        }
        
        @media (max-width: 992px) {
          .about-container {
            flex-direction: column-reverse;
          }
          
          .about-image {
            height: 350px;
          }
        }
        `}
      </style>
    </section>
  );
};

export default About;
