import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ServicesPage.css';

// Image assets - using local paths from /public/images
const images = [
  {
    src: "/images/services-1.jpg",
    name: "466741475_122193952916243162_8461739260359411220_n 1",
    nodeId: "110:1164",
    isFirst: true
  },
  {
    src: "/images/services-2.jpg",
    name: "LINE_ALBUM_Family Farm Day_250610_83 1",
    nodeId: "110:1165",
    isFirst: false
  }
];

export default function ServicesPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="services-page" data-name="Desktop - 3" data-node-id="8:43">
      <Navbar />
      
      <p className="services-title" data-node-id="34:4993">
        What we offer
      </p>

      <div className="services-image-container">
        <button className="carousel-button carousel-button-prev" onClick={prevImage} aria-label="Previous image">
          ‹
        </button>
        
        <div className="carousel-wrapper">
          <div 
            className="carousel-track" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div 
                key={index}
                className={`services-image ${image.isFirst ? 'image-1' : 'image-2'}`}
                data-name={image.name} 
                data-node-id={image.nodeId}
              >
                <div className="services-image-inner">
                  <img alt="" src={image.src} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-button carousel-button-next" onClick={nextImage} aria-label="Next image">
          ›
        </button>

        <div className="carousel-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="services-cards">
        <div className="service-card" data-node-id="I34:4338;2143:14363">
          <div className="service-icon" />
          <div className="service-body">
            <p className="service-title">Workshops & Study Tours</p>
            <p className="service-description">School trips, kids' camps, and family workshops</p>
          </div>
        </div>

        <div className="service-card" data-node-id="I34:4338;2143:14364">
          <div className="service-icon" />
          <div className="service-body">
            <p className="service-title">Leaf Compost & Starter Kits</p>
            <p className="service-description">Supplying compost and easy starter kits for home gardening</p>
          </div>
        </div>

        <div className="service-card" data-node-id="I34:4338;2143:14365">
          <div className="service-icon" />
          <div className="service-body">
            <p className="service-title">Community Consulting</p>
            <p className="service-description">Consulting on Low-Carbon models for communities and organizations</p>
          </div>
        </div>

        <div className="service-card" data-node-id="I34:4338;2143:14366">
          <div className="service-icon" />
          <div className="service-body">
            <p className="service-title">Organic Vegetable Supply</p>
            <p className="service-description">Supplying fresh organic vegetables to restaurants and families</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
