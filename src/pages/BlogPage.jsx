import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './BlogPage.css';

const imgItem1 = "https://www.figma.com/api/mcp/asset/e41e83cf-d23b-4561-b188-e0b59a698a65";

const blogPosts = [
  { id: 1, image: imgItem1, label: 'Sustainable Farming Practices', description: 'Learn about our innovative approaches to sustainable agriculture and environmental conservation.' },
  { id: 2, image: imgItem1, label: 'Community Impact Stories', description: 'Discover how our programs are making a difference in local communities.' },
  { id: 3, image: imgItem1, label: 'Workshop Highlights', description: 'Recap of our recent workshops and educational events.' },
  { id: 4, image: imgItem1, label: 'Seasonal Updates', description: 'Latest news and updates from the farm throughout the seasons.' },
];

export default function BlogPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPost = () => {
    setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
  };

  const prevPost = () => {
    setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length);
  };

  const goToPost = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="blog-page" data-name="Desktop - 8" data-node-id="17:2">
      <Navbar />
      
      <p className="blog-title" data-node-id="19:148">
        Blog
      </p>

      <div className="blog-carousel" data-node-id="25:381">
        <button className="carousel-button carousel-button-prev" onClick={prevPost} aria-label="Previous post">
          ‹
        </button>
        
        <div className="carousel-wrapper">
          <div 
            className="carousel-track" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {blogPosts.map((post, index) => (
              <div 
                key={post.id}
                className={`carousel-item main ${index === currentIndex ? 'active' : ''}`}
                data-node-id="25:377"
                onClick={() => goToPost(index)}
              >
                <div className="carousel-image">
                  <img alt={post.label} src={post.image} />
                </div>
                <div className="carousel-content">
                  <p className="carousel-label">{post.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-button carousel-button-next" onClick={nextPost} aria-label="Next post">
          ›
        </button>

        <div className="carousel-indicators">
          {blogPosts.map((_, index) => (
            <button
              key={index}
              className={`carousel-indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToPost(index)}
              aria-label={`Go to post ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <p className="blog-description" data-node-id="25:444">
        {blogPosts[currentIndex].description}
      </p>

      <Footer />
    </div>
  );
}
