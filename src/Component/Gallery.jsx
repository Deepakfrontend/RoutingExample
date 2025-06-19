import React, { useState, useEffect } from 'react';
import '../Style/Gallery.css';
import img1 from '../assets/ofice1.jpg';
import img2 from '../assets/ofice2.jpg';
import img3 from '../assets/ofice3.jpg';
import img4 from '../assets/ofice4.jpeg';
import img5 from '../assets/ofice5.jpeg';
import img6 from '../assets/ofice6.jpeg';

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(slide);
  }, [images.length]);

  return (
    <div className="slideshow-container">
      <h1>Office Gallery</h1>
      <p>Explore a glimpse of our office and team culture.</p>

      <div className="slideshow">
        {images.map((src, index) => (
          <div key={index} className={`slide ${index === current ? 'active' : ''}`}>
            <img src={src} alt={`Office ${index + 1}`} />
          </div>
        ))}
        <div className="dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === current ? 'active' : ''}`}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
