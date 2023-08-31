import React, { useState, useEffect } from 'react';
import './Blog.css';

function Blog() {
    const [currentCard, setCurrentCard] = useState(1);

    const moveCard = () => {
        setCurrentCard(prevCard => (prevCard < 2 ? prevCard + 1 : 1));
    };

    useEffect(() => {
        const timer = setInterval(() => {
            moveCard();
        }, 20000);  // Change card every 20 seconds

        return () => clearInterval(timer);
    }, []); 

    return (
        <section id="blog" className="blog py-3">
            <div className="wrapper">
                <div className="header">
                    <span></span>
                </div>
                <div className="blog-info">
                    <h2>Read Our <span className="text-secondary">Latest Insights</span></h2>
                    <p className="white-paragraph">
                        Learn more about how Intelliverse is revolutionizing operational<br /> productivity.
                    </p>
                    <div className="resources">
                        <a className="resource" href="#">Resources</a>
                        <a className="resource" href="#">Articles</a>
                    </div>
                    <a href="https://intelliverseai.com/blog/" className="white-link view-all-button">view all</a>
                </div>
                <div className="blog-card">
                    {currentCard === 1 && (
                        <div className="card">
                            <div className="card-header">
                                <img src="/images/blog1.jpg" alt="Blog post" />
                            </div>
                            <div className="card-body">
                                <span className="tag tag-yellow">Business Intelligence</span>
                                <h4>AI Regulation in Healthcare: <br /> Safeguarding Patient <br /> Data</h4>
                                <div className="footer">
                                    <small>Jul 7, 2023 / 5 comments</small>
                                    <a href="https://intelliverseai.com/ai-regulation-in-healthcare-safeguarding-patient-data/"><i className="bx bx-right-arrow-alt bx-sm"></i></a>
                                </div>
                            </div>
                        </div>
                    )}
                    {currentCard === 2 && (
                        <div className="card">
                            <div className="card-header">
                                <img src="/images/blog2.jpg" alt="Blog post" />
                            </div>
                            <div className="card-body">
                                <span className="tag tag-purple">AI Consulting</span>
                                <h4>How to Implement AI- <br /> Powered Decision <br />Making Simply</h4>
                                <div className="footer">
                                    <small>January 26, 2023 / 20 comments</small>
                                    <a href="https://intelliverseai.com/how-to-implement-ai-powered-analytics-in-your-business/"><i className="bx bx-right-arrow-alt bx-sm"></i></a>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default Blog;

