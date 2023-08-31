import React from 'react';
import './Footer.css';
import EmailIcon from '../icons/EmailIcon.svg';
import TwitterIcon from '../icons/TwitterIcon.svg';
import LinkedInIcon from '../icons/LinkedInIcon.svg';
import FacebookIcon from '../icons/FacebookIcon.svg';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                
                <div className="footer__left-section">
                    {/* Services Columns */}
                    <div className="footer__col">
                        <h3>Services</h3>
                        <div className="footer__subcol">
                            <ul>
                                <li>Artificial Intelligence & ML</li>
                                <li>AI Consulting</li>
                                <li>MLOps Consulting</li>
                                <li>Machine Learning Consulting</li>
                                <li>Data Annotation Services</li>
                            </ul>
                        </div>
                        <div className="footer__subcol">
                            <ul>
                                <li>Data Engineering</li>
                                <li>Data Engineering Services</li>
                                <li>Databricks Deployment Services</li>
                                <li>Big Data Consulting</li>
                                <li>Data Analytics Consulting Services</li>
                                <li>Business Intelligence Services</li>
                            </ul>
                        </div>
                        <div className="footer__subcol">
                            <ul>
                                <li>Generative AI</li>
                                <li>Generative AI Development Company</li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Box */}
<div className="footer__contact-box">
    <div className="contact-box__left">
        <h4>Upper Hill - HQ</h4>
        <p>Nairobi</p>
        <p>00100 Nairobi</p>
        <p>Nairobi, Kenya</p>
    </div>

    <div className="contact-box__right">
        <div className="footer__email-section">
            <img src={EmailIcon} alt="Email Icon" />
            <a href="mailto:hi@intelliverse.com">Intelliverse@gmail.com</a>
        </div>
    </div>
    
    <a href="#" className="more-offices-link">more offices</a>
</div>

                </div>
                
                
                
{/* Solutions Column */}
<div className="footer__col">
    <h3>Solutions</h3>
    <ul>
        {/* Technologies subheading */}
        <li className="sub-heading">Technologies</li>
        <li>Computer Vision Solutions</li>
        <li>NLP Solutions</li>
        <br />
        
        {/* Industries subheading */}
        <li className="sub-heading">Industries</li>
        <li>Manufacturing</li>
        <li>Retail</li>
        <li>Finance & Insurance</li>
        <li>Logistics</li>
        <li>Aviation</li>
        <li>Technology companies</li>
    </ul>
</div>


                {/* Menu Column */}
                <div className="footer__col">
                    <h3>Menu</h3>
                    <ul>
                        <li>About</li>
                        <li>Resources</li>
                        <li>Webinars</li>
                        <li>Blog</li>
                        <li>Career</li>
                        <li>Meet us</li>
                        <li>Case studies</li>
                        <li><button className="lets-talk-button">Let's talk</button></li>
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer__bottom">
                <div className="footer__bottom-text">
                    <p>© Intelliverse.com. All rights reserved.</p>
                    <a href="#">Terms and Conditions</a>
                    <a href="#">Policy privacy</a>
                    <a href="#">Cookies policy</a>
                </div>
                <div className="footer__social-icons">
                    <a href="#"><img src={TwitterIcon} alt="Twitter" /></a>
                    <a href="#"><img src={LinkedInIcon} alt="LinkedIn" /></a>
                    <a href="#"><img src={FacebookIcon} alt="Facebook" /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

