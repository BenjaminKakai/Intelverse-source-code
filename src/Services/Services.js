import React from 'react';
import './Services.css';
import BoxIcon from '../icons/BoxIcons';

function Services() {
    const boxIconStyles = {
        position: 'absolute',
        right: '20px',
        bottom: '20px',
        fontSize: '10px'
    };

    
    // Function to handle cookie acceptance
    const handleAcceptCookies = () => {
        document.getElementById("cookie-popup").style.display = "none";
    };
return (
        <section id="services" className="bg-light py-3">
            <div className="wrapper">
                <div className="grid-container">
                    {/* Cookie Popup */}
                    <div className="cookie-popup" id="cookie-popup">
                        <p>We use cookies to enhance your experience.</p>
                        <button id="accept-cookies" onClick={handleAcceptCookies}>Accept</button>
                    </div>

                    <div className="hover-container">
                        <div className="item">
                            <div className="text-content">
                                <h3>Our Core Capabilities</h3>
                            </div>
                        </div>
                    </div>
                    <div className="hover-container">
                        <div className="item"></div>
                    </div>
                    <div className="hover-container">
                        <div className="item hoverable">
                            <div className="text-content">
                                <h3>Generative AI</h3>
                                <p>Crafting virtual worlds with AI magic.</p>
                            </div>
                            <BoxIcon iconName="credit-card" style={boxIconStyles} />
                            <span className="check">Check</span>
                        </div>
                    </div>
                    <div className="hover-container">
                        <div className="item"></div>
                    </div>
                    <div className="hover-container">
                        <div className="item hoverable">
                            <div className="text-content">
                                <h3>Computer Vision Solutions</h3>
                                <p>Empowering machines to see and understand.</p>
                            </div>
                            <BoxIcon iconName="building" style={boxIconStyles} />
                            <span className="check">Check</span>
                        </div>
                    </div>
                    <div className="hover-container">
                        <div className="item hoverable">
                            <div className="text-content">
                                <h3>Data Engineering Services</h3>
                                <p>Building robust data infrastructures for AI.</p>
                            </div>
                            <BoxIcon iconName="badge-dollar" style={boxIconStyles} />
                            <span className="check">Check</span>
                        </div>
                    </div>
                    <div className="hover-container">
                        <div className="item hoverable">
                            <div className="text-content">
                                <h3>AI Consulting</h3>
                                <p>Guiding businesses into the AI era.</p>
                            </div>
                            <BoxIcon iconName="plane" style={boxIconStyles} />
                            <span className="check">Check</span>
                        </div>
                    </div>
                    <div className="hover-container">
                        <div className="item hoverable">
                            <div className="text-content">
                                <h3>NLP Solutions</h3>
                                <p>Machines that understand human language.</p>
                            </div>
                            <BoxIcon iconName="plane" style={boxIconStyles} />
                            <span className="check">Check</span>
                        </div>
                    </div>
                    <div className="hover-container">
                        <div className="item hoverable">
                            <div className="text-content">
                                <h3>MLOps</h3>
                                <p>Deploying and managing AI at scale.</p>
                            </div>
                            <BoxIcon iconName="plane" style={boxIconStyles} />
                            <span className="check">Check</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;

