
import React, { useEffect, useRef } from 'react';

const Services = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  
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

    const serviceElements = servicesRef.current?.querySelectorAll('.animate');
    
    if (serviceElements) {
      serviceElements.forEach(el => {
        observer.observe(el);
      });
    }

    return () => {
      if (serviceElements) {
        serviceElements.forEach(el => {
          observer.unobserve(el);
        });
      }
    };
  }, []);

  const services = [
    {
      name: "Haircut",
      description: "Precision cut tailored to your style and face shape.",
      price: "$30",
      image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGFpcmN1dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Beard Trim",
      description: "Clean lines and perfect shaping for your facial hair.",
      price: "$20",
      image: "https://i.pinimg.com/736x/46/44/38/4644384c5cba572b7b15365c6b0490b2.jpg"
    },
    {
      name: "Hot Towel Shave",
      description: "Traditional straight razor shave with hot towel treatment.",
      price: "$35",
      image: "https://images.squarespace-cdn.com/content/v1/6499daf94cf67b3cc46ceb7c/1707314362886-7V2YD5ZYCK2XLNLEJS54/hot+towel+shave+dublin.jpg"
    },
    {
      name: "Hair Coloring",
      description: "Professional color services to enhance or change your look.",
      price: "$50+",
      image: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhaXIlMjBjb2xvcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      name: "Advance Facials",
      description: "Advance LED Facials.",
      price: "$45",
      image: "https://careys.co.za/wp-content/uploads/2022/07/adv-facials.png"
    },
    {
      name: "Hair Treatments",
      description: "Haircut , hair colouring.",
      price: "$65",
      image: "https://www.shear-genius-salon.com/wp-content/uploads/2018/02/hair-treatments.jpg"
    },
  ];

  return (
    <section id="services" className="services section-padding" ref={servicesRef}>
      <div className="services-header">
        <p className="subtitle animate">What We Offer</p>
        <h2 className="section-title animate">Our Premium Services</h2>
        <p className="services-description animate">
          At Fama Barber, we offer a range of grooming services designed to help you look and feel your best. 
          From classic haircuts to luxury beard treatments, our skilled barbers deliver exceptional results.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card animate" key={index}>
            <div className="service-image">
              <img src={service.image} alt={service.name} />
            </div>
            <div className="service-content">
              <div className="service-info">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
              <div className="service-price">
                <span>{service.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="services-cta animate">
        <a href="#contact" className="btn">Book an Appointment</a>
      </div>

      <style>
        {`
        .services {
          background-color: var(--dark);
          color: var(--light);
        }
        
        .services-header {
          text-align: center;
          margin-bottom: 60px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .services-description {
          color: #aaa;
        }
        
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
        }
        
        .service-card {
          background-color: #1a1a1a;
          border: 1px solid #333;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }
        
        .service-image {
          height: 200px;
          overflow: hidden;
        }
        
        .service-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s ease;
        }
        
        .service-card:hover .service-image img {
          transform: scale(1.1);
        }
        
        .service-content {
          padding: 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .service-info {
          flex: 1;
        }
        
        .service-info h3 {
          margin-bottom: 10px;
          font-size: 1.2rem;
        }
        
        .service-info p {
          font-size: 0.9rem;
          color: #aaa;
        }
        
        .service-price {
          padding: 5px 15px;
          background-color: var(--gold);
          color: var(--dark);
          font-weight: 600;
          border-radius: 3px;
        }
        
        .services-cta {
          margin-top: 50px;
          text-align: center;
        }
        
        .animate {
          opacity: 0;
          transform: translateY(30px);
        }
        
        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
        }
        `}
      </style>
    </section>
  );
};

export default Services;
