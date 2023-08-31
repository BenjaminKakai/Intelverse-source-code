import React, { useState, useEffect } from 'react';
import './Goal.css';

function Goal() {
    const [currentSlide, setCurrentSlide] = useState(1);

    const moveSlide = (direction) => {
        if (direction === "next") {
            setCurrentSlide(prevSlide => (prevSlide < 5 ? prevSlide + 1 : 1));
        } else {
            setCurrentSlide(prevSlide => (prevSlide > 1 ? prevSlide - 1 : 5));
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            moveSlide("next");
        }, 20000);  // Auto-slide every 20 seconds

        return () => clearInterval(timer);
    }, []); 

    return (
        <div className="goal-container">
            <div className="customer-stories">
                <h1 style={{ color: 'white' }}>Customer Stories</h1>
            </div>
            <div className="slides-container">
                <div id="goal" className="goal">
                    {currentSlide === 1 && (
                        <div className="content-container">
                            <div className="goal-img">
                                <img src="/images/photo1.jpg" alt="Goal" />
                            </div>
                            <div className="goal-text">
                                <h2>Empowering Through AI</h2>
                                <p>Discover the potential of artificial intelligence and how it's revolutionizing industries, enhancing efficiency, and shaping the future.</p>
                                <button className="read-more-btn">Read More</button>
                            </div>
                        </div>
                    )}
                    
                
{currentSlide === 2 && (
    <div className="content-container">
        <div className="goal-img">
            <img src="/images/photo2.jpg" alt="Goal" />
        </div>
        <div className="goal-text">
            <h2>AI in Healthcare</h2>
            <p>Learn how artificial intelligence is transforming healthcare, from diagnosis to patient care, and making medical services more efficient.</p>
            <button className="read-more-btn">Discover More</button>
        </div>
    </div>
)}
                
{currentSlide === 3 && (
    <div className="content-container">
        <div className="goal-img">
            <img src="/images/photo3.jpg" alt="Goal" />
        </div>
        <div className="goal-text">
            <h2>AI in Finance</h2>
            <p>Unearth the role of AI in financial sectors, including fraud detection, robo-advisors, and algorithmic trading, enhancing precision and security.</p>
            <button className="read-more-btn">Learn More</button>
        </div>
    </div>
)}
                
{currentSlide === 4 && (
    <div className="content-container">
        <div className="goal-img">
            <img src="/images/photo4.jpg" alt="Goal" />
        </div>
        <div className="goal-text">
            <h2>Revolutionizing Education with AI</h2>
            <p>Explore the wonders of AI in educational technology, from personalized learning to administrative efficiency and virtual tutors.</p>
            <button className="read-more-btn">Dive In</button>
        </div>
    </div>
)}
                
{currentSlide === 5 && (
    <div className="content-container">
        <div className="goal-img">
            <img src="/images/photo5.jpg" alt="Goal" />
        </div>
        <div className="goal-text">
            <h2>AI in Automotive</h2>
            <p>Experience the future of transportation as AI powers self-driving cars, traffic prediction, and vehicle safety enhancements.</p>
            <button className="read-more-btn">Explore More</button>
        </div>
    </div>
)}

                    
                </div>
            </div>
             <div className="nav-arrows">
                <span className="arrow left" onClick={() => moveSlide("prev")}>&lt;</span>
                <span className="arrow right" onClick={() => moveSlide("next")}>&gt;</span>
            </div>
        </div>
    );
}

export default Goal;
