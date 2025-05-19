import React, { useEffect, useRef, useState } from "react";

const Contact = () => {
  const contactRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState([]);

  // Validate all required fields and update errors state
  const validateFormData = () => {
    const requiredFields = [
      "name",
      "email",
      "phone",
      "service",
      "date",
      "time",
    ];

    // Check for fields that are empty or only whitespace
    const missingFields = requiredFields.filter(
      (field) => !formData[field] || formData[field].trim() === ""
    );
    setErrors(missingFields);
    return missingFields.length > 0;
  };

  // Handle changes for all form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ 
      ...formData, 
      [name]: value 
    });
    const newerrors=errors.filter((e)=>e!==name);
    setErrors(newerrors);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Run validation and check for errors
    const hasError = validateFormData();
    if (!hasError) {
      setFormSubmitted(true);
    }

  };

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const contactElements = contactRef.current?.querySelectorAll(".animate");

    if (contactElements) {
      contactElements.forEach((el) => {
        observer.observe(el);
      });
    }

    // Cleanup observer on unmount
    return () => {
      if (contactElements) {
        contactElements.forEach((el) => {
          observer.unobserve(el);
        });
      }
    };
  }, []);

  return (
    <section id="contact" className="contact section-padding" ref={contactRef}>
      <div className="contact-header">
        <p className="subtitle animate">Get In Touch</p>
        <h2 className="section-title animate">Book an Appointment</h2>
        <p className="contact-description animate">
          Ready for a fresh look? Schedule your appointment with our experienced barbers. Fill out the form below, and we'll get back to you to confirm your booking.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-form animate">
          {formSubmitted ? (
            <div className="success-message">
              <h3>Thank you for your booking!</h3>
              <p>We've received your appointment request and will confirm shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Full Name Field */}
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.includes("name") ? "erroBorder" : ""}
                />
                {errors.includes("name") && (
                  <span className="errorColor">Name is required*</span>
                )}
              </div>

              {/* Email Field */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.includes("email") ? "erroBorder" : ""}
                  />
                  {errors.includes("email") && (
                    <span className="errorColor">Email is required*</span>
                  )}
                </div>

                {/* Phone Field */}
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.includes("phone") ? "erroBorder" : ""}
                  />
                  {errors.includes("phone") && (
                    <span className="errorColor">Phone is required*</span>
                  )}
                </div>
              </div>

              {/* Service Selector */}
              <div className="form-group">
                <label htmlFor="service">Service</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={errors.includes("service") ? "erroBorder" : ""}
                >
                  <option value="">Select a service</option>
                  <option value="haircut">Haircut</option>
                  <option value="beard-trim">Beard Trim</option>
                  <option value="hot-towel-shave">Hot Towel Shave</option>
                  <option value="hair-coloring">Hair Coloring</option>
                  <option value="father-son">Father & Son</option>
                  <option value="complete-package">Complete Package</option>
                </select>
                {errors.includes("service") && (
                  <span className="errorColor">Service is required*</span>
                )}
              </div>

              {/* Date and Time Fields */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Preferred Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className={errors.includes("date") ? "erroBorder" : ""}
                  />
                  {errors.includes("date") && (
                    <span className="errorColor">Date is required*</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="time">Preferred Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={errors.includes("time") ? "erroBorder" : ""}
                    
                  />
                  {errors.includes("time") && (
                    <span className="errorColor">Time is required*</span>
                  )}
                </div>
              </div>

              {/* Additional Notes */}
              <div className="form-group">
                <label htmlFor="message">Additional Notes</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={errors.includes("message") ? "erroBorder" : ""}
                  
                ></textarea>
                {errors.includes("message") && (
                  <span className="errorColor">Message is required*</span>
                )}
              </div>

              <button type="submit" className="btn">
                Book Appointment
              </button>
            </form>
          )}
        </div>

        <div className="contact-info animate">
          <div className="info-box">
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

          <div className="info-box">
            <h3>Contact Information</h3>
            <ul>
              <li>
                <span>Address:</span> 123 Main Street, New York, NY 10001
              </li>
              <li>
                <span>Phone:</span> (555) 123-4567
              </li>
              <li>
                <span>Email:</span> info@famabarber.com
              </li>
            </ul>
          </div>

          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-73.9815649!3d40.7477569!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ0JzU4LjIiTiA3M8KwNTgnNTMuNiJX!5e0!3m2!1sen!2sus!4v1620815113238!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="map"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Inline CSS styles */}
      <style>
        {`
        .contact {
          background-color: var(--light);
          color: var(--dark);
          padding: 40px 20px;
        }
        .erroBorder {
          border: 1px solid red;
        }
        .errorColor {
          color: red;
          font-size: 0.85rem;
        }
        .contact-header {
          text-align: center;
          margin-bottom: 60px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        .contact-description {
          color: var(--gray);
        }
        .contact-container {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 40px;
        }
        .contact-form {
          background-color: white;
          padding: 30px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        label {
          display: block;
          margin-bottom: 5px;
          font-weight: 500;
          font-size: 0.9rem;
        }
        input, select, textarea {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #ddd;
          font-family: inherit;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        input:focus, select:focus, textarea:focus {
          outline: none;
          border-color: var(--gold);
        }
        .btn {
          display: inline-block;
          background-color: var(--gold);
          color: #fff;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .btn:hover {
          background-color: #d4af37;
        }
        .success-message {
          text-align: center;
          padding: 40px 20px;
        }
        .success-message h3 {
          color: var(--gold);
          margin-bottom: 10px;
          font-size: 1.5rem;
        }
        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .info-box {
          background-color: white;
          padding: 20px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }
        .info-box h3 {
          margin-bottom: 15px;
          font-size: 1.2rem;
          color: var(--gold);
        }
        .info-box ul {
          list-style: none;
          padding: 0;
        }
        .info-box ul li {
          margin-bottom: 10px;
          font-size: 0.95rem;
        }
        .info-box span {
          font-weight: 600;
          margin-right: 5px;
        }
        .map {
          overflow: hidden;
        }
        .animate {
          opacity: 0;
          transform: translateY(30px);
        }
        .slide-up {
          opacity: 1;
          transform: translateY(0);
          transition: all 0.6s ease-out;
        }
        @media (max-width: 992px) {
          .contact-container {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 768px) {
          .form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
        `}
      </style>
    </section>
  );
};

export default Contact;
