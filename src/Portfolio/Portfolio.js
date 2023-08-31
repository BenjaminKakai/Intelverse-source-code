import React, { useState } from 'react';

import Slider from 'react-slick';
import './Portfolio.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Portfolio() {
const images = [
  { name: 'images/Manufacturing.jpg', label: 'Manufacturing', description: 'Intelliverse offers top-tier data analytics consulting using cutting-edge technology.', url: 'https://intelliverseai.com/data-analytics-consulting-services/' },
  { name: 'images/Retail.jpg', label: 'Retail', description: 'Intelliverse enhances retail through impactful AI solutions. How can we assist you?', url: 'https://intelliverseai.com/retail/' },
  { name: 'images/Technology Companies.jpg', label: 'Technology Companies', description: 'Inteliverse elevates software across industries with AI module incorporation.', url: 'https://intelliverseai.com/technology-companies/' },
  { name: 'images/fintech.jpg', label: 'Finance and Insurance', description: 'Inteliverse is at the forefront of digital transformation in finance and insurance through Big Data, AI, and Machine Learning.', url: 'https://intelliverseai.com/finance-insurance/' },
  { name: 'images/Computer Vision Solutions.jpg', label: 'Computer Vision Solutions', description: 'Boost operations with Inteliverse’s computer vision solutions.', url: 'https://intelliverseai.com/computer-vision-solution/' },
  { name: 'images/NLP.jpg', label: 'NLP', description: 'Inteliverse provides comprehensive Natural Language Processing solutions.', url: 'https://intelliverseai.com/nlp-solutions/' },
];

  const [selectedImage, setSelectedImage] = useState(images[0]); 

  return (
    <section id="portfolio" className="portfolio py-3">
     
<h3 className="text-center">
  <span className="industry-expertise">Industry Expertise </span>
  <span className="industry-query">Your industry is not here? That's not a problem! </span>
  <button className="lets-talk-btn">Let's talk</button>
</h3>

      <div className="portfolio-content">
        <div className="image-section">
          <img src={`/${selectedImage.name}`} alt={selectedImage.label} />
        </div>
        <div className="content-section">
          <h4 className="image-heading">{selectedImage.label}</h4>
          <p className="image-description">{selectedImage.description}</p>
          <a href={selectedImage.url} className="read-more-button" target="_blank" rel="noopener noreferrer">Read More</a>
        </div>
      </div>

      <div className="carousel-boxes">
        {images.map((image, index) => (
          <button className="carousel-box" key={index} onClick={() => setSelectedImage(image)}>
            <span>{image.label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;

