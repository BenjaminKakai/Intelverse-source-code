import React, { useState, useEffect, useRef } from 'react';
import './WhiteStripWithAnimation.css';

const WhiteStripWithAnimation = () => {
    const images = [
        "/images/IBMlogo.jpg",
        "/images/Jumialogo.jpg",
        "/images/ciscologo.jpg",
        "/images/googlelogo.jpg",
        "/images/amazonlogo.jpg",
        "/images/Nielsenlogo.jpg",
        "/images/microsoftlogo.jpg",
        "/images/donebydonelogo.jpg",
    ];

    const companyLinks = [
        "https://www.ibm.com/",
        "https://www.jumia.com/",
        "https://www.cisco.com/",
        "https://www.google.com/",
        "https://www.amazon.com/",
        "https://www.nielsen.com/",
        "https://www.microsoft.com/",
        "https://www.donebydone.com/",
    ];

    const numberOfDuplicates = 10;
    const duplicatedImages = Array.from({ length: numberOfDuplicates }, () => [...images]).flat();
    const duplicatedCompanyLinks = Array.from({ length: numberOfDuplicates }, () => [...companyLinks]).flat();

    const [scrollPosition, setScrollPosition] = useState(0);
    const whiteStripRef = useRef(null);
    const rafRef = useRef(null);

    const handleScroll = () => {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => {
            setScrollPosition(window.scrollY);
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    useEffect(() => {
        if (whiteStripRef.current) {
            whiteStripRef.current.style.bottom = `${scrollPosition}px`;
        }
    }, [scrollPosition]);

    return (
        <div className="container"> 
            <div className="white-strip" ref={whiteStripRef}>
                <span style={{ color: 'black', zIndex: 2 }}>Our Clients</span>
                <div className="client-logos">
                    <div className="logo-slider">
                        {duplicatedImages.map((image, index) => {
                            return (
                                <a href={duplicatedCompanyLinks[index]} target="_blank" rel="noopener noreferrer" key={index}>
                                    <img
                                        src={image}
                                        alt="client logo"
                                        className="client-logo"
                                    />
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhiteStripWithAnimation;

