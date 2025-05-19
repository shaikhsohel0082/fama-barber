import React from "react";
import facebook from "@/images/facebook.png";
import instagram from "@/images/instagram.png";
import youtube from "@/images/youtube.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-info">
            <h2>
              Fama<span>Barber</span>
            </h2>
            <p>
              Premium grooming services for the modern gentleman. Our skilled
              barbers provide exceptional cuts, shaves, and styling in a
              relaxed, welcoming environment.
            </p>
            <div className="social-media">
              <a href="https://www.facebook.com/" className="social-icon" target="_blank">
                <img src={facebook} height={"25px"} width={"25px"}/>
              </a>
              <a href="https://www.instagram.com/accounts/login/?hl=en" className="social-icon" target="_blank">
              <img src={instagram} height={"25px"} width={"25px"}/>
              </a>
              <a href="https://www.youtube.com/" className="social-icon" target="_blank">
              <img src={youtube} height={"25px"} width={"25px"}/>
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#team">Our Team</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>123 Main Street, New York, NY 10001</span>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>(555) 123-4567</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>info@famabarber.com</span>
              </li>
            </ul>
          </div>
          <div className="footer-hours">
            <h3>Opening Hours</h3>
            <ul>
              <li>
                <span>Monday - Friday:</span> 9:00 AM - 8:00 PM
              </li>
              <li>
                <span>Saturday:</span> 10:00 AM - 6:00 PM
              </li>
              <li>
                <span>Sunday:</span> Closed
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Fama Barber. All Rights Reserved.
          </p>
          <p className="footer-credits">
            Designed by{" "}
            <a
              href="https://www.linkedin.com/in/73405-sohel-shaikh/"
              target="_blank"
            >
              sohel shaikh
            </a>
          </p>
        </div>
      </div>

      <style>
        {`
        .footer {
          background-color: #0a0a0a;
          color: var(--light);
          padding-top: 70px;
        }
        
        .footer-container {
          width: 90%;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .footer-top {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          padding-bottom: 50px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-info {
          grid-column: span 2;
          margin-bottom: 20px;
        }
        
        .footer-info h2 {
          font-size: 2rem;
          margin-bottom: 20px;
          font-weight: 700;
        }
        
        .footer-info span {
          color: var(--gold);
        }
        
        .footer-info p {
          color: #aaa;
          line-height: 1.6;
          margin-bottom: 20px;
          max-width: 400px;
        }
        
        .social-media {
          display: flex;
          gap: 15px;
        }
        
        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          background-color: rgba(255, 255, 255, 0.1);
          color: var(--light);
          border-radius: 50%;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .social-icon:hover {
          background-color: var(--gold);
          color: var(--dark);
        }
        
        .footer-links h3,
        .footer-contact h3,
        .footer-hours h3 {
          color: var(--gold);
          margin-bottom: 20px;
          font-size: 1.2rem;
        }
        
        .footer-links ul,
        .footer-contact ul,
        .footer-hours ul {
          list-style: none;
        }
        
        .footer-links li {
          margin-bottom: 10px;
        }
        
        .footer-links a {
          color: #aaa;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-links a:hover {
          color: var(--gold);
        }
        
        .footer-contact li,
        .footer-hours li {
          display: flex;
          margin-bottom: 15px;
          color: #aaa;
        }
        
        .footer-contact i {
          margin-right: 10px;
          color: var(--gold);
        }
        
        .footer-hours span {
          color: var(--gold);
          margin-right: 5px;
        }
        
        .footer-bottom {
          padding: 20px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #aaa;
          font-size: 0.9rem;
        }
        
        @media (max-width: 992px) {
          .footer-info {
            grid-column: span 1;
          }
        }
        
        @media (max-width: 768px) {
          .footer-bottom {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
        }
        `}
      </style>
    </footer>
  );
};

export default Footer;
