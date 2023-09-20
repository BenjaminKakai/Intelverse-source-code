import React, { useState, useEffect } from 'react';
import './Portfolio.css';

function Portfolio() {
    const images = [
        { name: 'images/Retail.jpg', label: 'Retail', description: 'Intelliverse enhances retail through impactful AI solutions. How can we assist you?', url: 'https://intelliverseai.com/retail/' },
        { name: 'images/Technology Companies.jpg', label: 'Technology Companies', description: 'Inteliverse elevates software across industries with AI module incorporation.', url: 'https://intelliverseai.com/technology-companies/' },
        { name: 'images/Computer Vision Solutions.jpg', label: 'Computer Vision Solutions', description: 'Boost operations with Inteliverse’s computer vision solutions.', url: 'https://intelliverseai.com/computer-vision-solution/' },
        { name: 'images/NLP.jpg', label: 'NLP', description: 'Inteliverse provides comprehensive Natural Language Processing solutions.', url: 'https://intelliverseai.com/nlp-solutions/' },
    ];

    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [animationClass, setAnimationClass] = useState('');
    const [selectedButton, setSelectedButton] = useState(0);

    useEffect(() => {
        let currentImageIndex = 0;
        const timer = setInterval(() => {
            setSelectedImage(images[currentImageIndex]);
            setAnimationClass('animate-in-from-right');

            setTimeout(() => setAnimationClass(''), 1500);

            currentImageIndex = (currentImageIndex + 1) % images.length;
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section id="portfolio" className="portfolio py-3" style={{background: '#F5F5F5'}}>
            <div className="outer-container">
                <h3 className="text-center">
                    <span className="industry-expertise">Industry Expertise </span>
                    <div className="industry-query-container">
                        <span className="industry-query">Your industry is not here? That's not a problem! </span>
                        <button className="lets-talk-btn">Let's talk</button>
                    </div>
                </h3>
                <div className="inner-container">
                    <div className={`portfolio-content ${animationClass}`}>
                        <div className="image-section">
                            <img src={`/${selectedImage.name}`} alt={selectedImage.label} />
                        </div>
                        <div className="content-section">
                            <h4 className="image-heading adjusted-content">{selectedImage.label}</h4>
                            <p className="image-description adjusted-content">{selectedImage.description}</p>
                            <a href={selectedImage.url} className="read-more-button adjusted-content" target="_blank" rel="noopener noreferrer">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="carousel-boxes">
                {images.map((image, index) => (
                    <button 
                        className={`carousel-box ${index === selectedButton ? 'selected' : ''}`} 
                        key={index} 
                        onClick={() => {
                            setSelectedImage(image);
                            setSelectedButton(index);
                        }}
                    >
                        <span>{image.label}</span>
                    </button>
                ))}
            </div>
        </section>
    );
}

export default Portfolio;

