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

    const handleAcceptCookies = () => {
        document.getElementById("cookie-popup").style.display = "none";
    };

    return (
        <section id="services" className="bg-light py-3">
            <div className="wrapper">
                <h3>Our Core <br /> Capabilities</h3>
                
                <div className="container">
                    <div className="column">
                        <div className="box">
                            <div className="text-content">
                                <h3>AI Consulting</h3>
                                <p>Guiding businesses into the AI era.</p>
                            </div>
                            <BoxIcon iconName="plane" style={boxIconStyles} />
                            <a href="#your-link-here" className="check">Check</a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="box">
                            <div className="text-content">
                                <h3>Computer Vision <br /> Solutions</h3>
                                <p>Empowering machines to see and understand.</p>
                            </div>
                            <BoxIcon iconName="building" style={boxIconStyles} />
                            <a href="#your-link-here" className="check">Check</a>
                        </div>
                        <div className="box nlp-box">
                            <div className="text-content">
                                <h3>NLP Solutions</h3>
                                <p>Machines that understand human language.</p>
                            </div>
                            <BoxIcon iconName="bxs-nlp" style={boxIconStyles} />
                            <a href="#your-link-here" className="check">Check</a>
                        </div>
                    </div>
                    <div className="column">
                        <div className="box">
                            <div className="text-content">
                                <h3>Generative AI</h3>
                                <p>Crafting virtual worlds with AI magic.</p>
                            </div>
                            <BoxIcon iconName="credit-card" style={boxIconStyles} />
                            <a href="#your-link-here" className="check">Check</a>
                        </div>
                        <div className="box data-engineering-box">
                            <div className="text-content">
                                <h3>Data Engineering <br /> Services</h3>
                                <p>Building robust data infrastructures for AI.</p>
                            </div>
                            <BoxIcon iconName="badge-dollar" style={boxIconStyles} />
                            <a href="#your-link-here" className="check">Check</a>
                        </div>
                        <div className="box">
                            <div className="text-content">
                                <h3>MLOps</h3>
                                <p>Deploying and managing AI at scale.</p>
                            </div>
                            <BoxIcon iconName="bxs-mlops" style={boxIconStyles} />
                            <a href="#your-link-here" className="check">Check</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cookie-popup" id="cookie-popup">
                <p>We use cookies to enhance your experience.</p>
                <button id="accept-cookies" onClick={handleAcceptCookies}>Accept</button>
            </div>
        </section>
    );
}

export default Services;

