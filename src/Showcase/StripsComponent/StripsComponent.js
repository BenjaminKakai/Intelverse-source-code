import React from 'react';
import './Strips.css';

const StripsComponent = () => {
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

    const numberOfDuplicates = 10;
    const duplicatedImages = Array.from({ length: numberOfDuplicates }, () => [...images]).flat();

    return (
        <div className="strip-container">
            <div className="navy-blue-strip">
                <div className="flex-1"></div>
                <div className="divider"></div>
                <div className="flex-content">
                    <h2 className="bold-text">Artificial Intelligence</h2>
                    <p>Building AI-powered solutions</p>
                </div>
                <div className="divider"></div>
                <div className="flex-content">
                    <h2 className="bold-text">Advanced Analytics</h2>
                    <p>Drive insights from your data</p>
                </div>
                <div className="divider"></div>
                <div className="flex-content">
                    <h2 className="bold-text">Consulting</h2>
                    <p>Bringing capabilities and<br /> consultative approach</p>
                </div>
            </div>
            <div className="white-strip">
                <span style={{ color: 'black', zIndex: 2 }}>Our Clients</span>
                <div className="client-logos">
                    <div className="logo-slider">
                        {duplicatedImages.map((image, index) => {
                            let companyLink = "#";
                            switch (image) {
                                case "/images/IBMlogo.jpg":
                                    companyLink = "https://www.ibm.com/about";
                                    break;
                                case "/images/Jumialogo.jpg":
                                    companyLink = "https://group.jumia.com/";
                                    break;
                                case "/images/ciscologo.jpg":
                                    companyLink = "https://www.cisco.com";
                                    break;
                                case "/images/googlelogo.jpg":
                                    companyLink = "https://about.google/";
                                    break;
                                case "/images/amazonlogo.jpg":
                                    companyLink = "https://www.amazon.com";
                                    break;
                                case "/images/Nielsenlogo.jpg":
                                    companyLink = "https://www.nielsen.com/";
                                    break;
                                case "/images/microsoftlogo.jpg":
                                    companyLink = "https://www.microsoft.com/en-us/";
                                    break;
                                case "/images/donebydonelogo.jpg":
                                    companyLink = "https://www.crunchbase.com/organization/donebynone";
                                    break;
                                default:
                                    companyLink = "#";
                                    break;
                            }
                            return (
                                <a href={companyLink} target="_blank" rel="noopener noreferrer" key={index}>
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

export default StripsComponent;

