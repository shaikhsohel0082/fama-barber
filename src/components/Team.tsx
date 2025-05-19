
import React, { useEffect, useRef } from 'react';

const Team = () => {
  const teamRef = useRef<HTMLDivElement>(null);
  
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

    const teamElements = teamRef.current?.querySelectorAll('.animate');
    
    if (teamElements) {
      teamElements.forEach(el => {
        observer.observe(el);
      });
    }

    return () => {
      if (teamElements) {
        teamElements.forEach(el => {
          observer.unobserve(el);
        });
      }
    };
  }, []);

  const teamMembers = [
    {
      name: "David Mitchell",
      position: "Master Barber & Founder",
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      description: "With over 15 years of experience, David is the visionary behind Fama Barber and specializes in classic cuts and hot towel shaves."
    },
    {
      name: "Michael Rodriguez",
      position: "Senior Barber",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      description: "Michael brings a modern flair to classic styles and has been with us since 2017. His attention to detail is unmatched."
    },
    {
      name: "James Wilson",
      position: "Style Expert",
      image: "https://images.unsplash.com/photo-1531727991582-cfd25ce79613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      description: "James specializes in contemporary cuts and color services. He's a trend-setter with an eye for what suits each client."
    },
    {
      name: "Thomas Black",
      position: "Beard Specialist",
      image: "https://images.unsplash.com/photo-1509460913899-515f1df34fea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBvcnRyYWl0JTIwbWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      description: "Thomas is our beard grooming expert, with specialized training in facial hair styling and maintenance."
    }
  ];

  return (
    <section id="team" className="team section-padding" ref={teamRef}>
      <div className="team-header">
        <p className="subtitle animate">Meet Our Team</p>
        <h2 className="section-title animate">Expert Barbers</h2>
        <p className="team-description animate">
          Our team of skilled barbers brings years of experience and passion to their craft. 
          Each member is dedicated to providing exceptional service and helping you achieve your desired look.
        </p>
      </div>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card animate" key={index}>
            <div className="team-image">
              <img src={member.image} alt={member.name} />
            </div>
            <div className="team-content">
              <h3>{member.name}</h3>
              <p className="team-position">{member.position}</p>
              <p className="team-bio">{member.description}</p>
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
        .team {
          background-color: var(--dark);
          color: var(--light);
        }
        
        .team-header {
          text-align: center;
          margin-bottom: 60px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .team-description {
          color: #aaa;
        }
        
        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
        }
        
        .team-card {
          background-color: #1a1a1a;
          border: 1px solid #333;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        
        .team-card:hover {
          transform: translateY(-10px);
        }
        
        .team-image {
          height: 300px;
          overflow: hidden;
        }
        
        .team-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .team-card:hover .team-image img {
          transform: scale(1.05);
        }
        
        .team-content {
          padding: 20px;
        }
        
        .team-content h3 {
          margin-bottom: 5px;
          font-size: 1.3rem;
        }
        
        .team-position {
          color: var(--gold);
          font-size: 0.9rem;
          margin-bottom: 15px;
        }
        
        .team-bio {
          font-size: 0.95rem;
          color: #aaa;
          line-height: 1.5;
        }
        
        .animate {
          opacity: 0;
          transform: translateY(30px);
        }
        
        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          }
        }
        `}
      </style>
    </section>
  );
};

export default Team;
