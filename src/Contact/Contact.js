import React, { useState, useEffect } from 'react';
import './Contact.css';

function Contact({ isVisible, onGoBack }) {
    const [showSendButton, setShowSendButton] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        let timeout;
        if (showSendButton) {
            timeout = setTimeout(() => {
                onGoBack(); // Hide the form after 10 seconds if the send button is shown
            }, 10000);
        }
        return () => clearTimeout(timeout);
    }, [showSendButton, onGoBack]);

    const handleTextareaChange = (e) => {
        setMessage(e.target.value);
        if (e.target.value) {
            setShowSendButton(true);
        } else {
            setShowSendButton(false);
        }
    };

    return (
        isVisible && (
            <div className="contact-container">
                <div className="left-section">
                    <h1>Let's discuss a solution for you.</h1>
                    <img src="/path_to_image.jpg" alt="Profile" className="profile-pic"/>
                    <h2>Benjamin Kakai</h2>
                    <p>We will help you estimate your project.</p>
                    <p><i className="bx bx-envelope"></i> benjaminkakaimasai@gmail.com</p>
                </div>

                <div className="right-section">
                    <input type="text" placeholder="Full Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="tel" placeholder="Phone Number"/>
                    <textarea
                        placeholder="Your message here..."
                        value={message}
                        onChange={handleTextareaChange}
                    ></textarea>
                    <p className="required-note">Required field</p>
                    <p>For more information about how we process your personal data, see our <a href="/privacy-policy">privacy policy</a>.</p>
                    <label>
                        <input type="checkbox"/> I consent to the processing of my personal data for marketing purposes.
                    </label>
                    {showSendButton && <button>Send</button>}
                    <button onClick={onGoBack}>Go Back</button>
                </div>
            </div>
        )
    );
}

export default Contact;

