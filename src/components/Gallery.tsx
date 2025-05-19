import React, { useEffect, useRef, useState } from "react";

const Gallery = () => {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

    const galleryElements = galleryRef.current?.querySelectorAll(".animate");

    if (galleryElements) {
      galleryElements.forEach((el) => {
        observer.observe(el);
      });
    }

    return () => {
      if (galleryElements) {
        galleryElements.forEach((el) => {
          observer.unobserve(el);
        });
      }
    };
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1605497788044-5a32c7078486?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFpcmN1dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.squarespace-cdn.com/content/v1/5f68082c9542475d0c882f9a/1718824221265-W6VX29VL8ETC7P4TCJCL/c9267a87-8f85-4c97-8cae-74f985be8d66.jpg",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFpcmN1dHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    "https://naturals-blogs-images.s3.ap-south-1.amazonaws.com/Hair+spa.jpg",
    "https://www.therapyhairstudio.com/wp-content/uploads/2022/10/mens-haircut-in-salon-experience.jpg",
    "https://img.freepik.com/premium-photo/process-making-trendy-hairstyle-beauty-salon_7502-2639.jpg",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGhhaXJjdXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fGJhcmJlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
  ];

  const openLightbox = (image: string) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section id="gallery" className="gallery section-padding" ref={galleryRef}>
      <div className="gallery-header">
        <p className="subtitle animate">Our Lookbook</p>
        <h2 className="section-title animate">Latest Styles</h2>
        <p className="gallery-description animate">
          Browse through our gallery of haircuts and styles. Our skilled barbers
          create looks that are tailored to each client's unique style and
          personality.
        </p>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <div
            className="gallery-item animate"
            key={index}
            onClick={() => openLightbox(image)}
          >
            <img src={image} alt={`Gallery Image ${index + 1}`} />
            <div className="gallery-overlay">
              <span>+</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <span className="close">&times;</span>
          <img
            src={selectedImage}
            alt="Enlarged view"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <style>
        {`
        .gallery {
          background-color: var(--light);
          color: var(--dark);
        }
        
        .gallery-header {
          text-align: center;
          margin-bottom: 60px;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        
        .gallery-description {
          color: var(--gray);
        }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 15px;
        }
        
        .gallery-item {
          height: 250px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
        }
        
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        
        .gallery-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .gallery-overlay span {
          color: white;
          font-size: 3rem;
        }
        
        .gallery-item:hover img {
          transform: scale(1.1);
        }
        
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
        
        .lightbox {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1100;
        }
        
        .lightbox-img {
          max-width: 90%;
          max-height: 90%;
        }
        
        .close {
          position: absolute;
          top: 20px;
          right: 30px;
          color: white;
          font-size: 40px;
          font-weight: bold;
          cursor: pointer;
        }
        
        .animate {
          opacity: 0;
          transform: translateY(30px);
        }
        
        @media (max-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          }
          
          .gallery-item {
            height: 200px;
          }
        }
        `}
      </style>
    </section>
  );
};

export default Gallery;
