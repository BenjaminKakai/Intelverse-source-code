import React from "react";
import homeVideo from "../home video.mp4";
import './Showcase.css';

// Function to show the pop-up and hide it after 10 seconds
function showPopup() {
  const popup = document.querySelector('.explore-more-popup');
  popup.style.display = 'block';
  setTimeout(() => {
    popup.style.display = 'none';
  }, 10000); // Corrected duration
}

const Showcase = () => {
  return (
    <div className="showcase">
      <video className="background-video" id="background-video" autoPlay loop muted>
        <source src={homeVideo} type="video/mp4" />
      </video>
      <div className="navbar-top">
        {/* Add navbar top content here */}
      </div>
      <div className="navbar-bottom">
        {/* Add navbar bottom content here */}
      </div>
      <div className="showcase-content">
        <h1>
          Driving changes <br /> through AI &amp; Data <span>&amp; Solutions</span>
        </h1>
        <p>
          We help enterprises build custom AI Solutions<br /> and Growth Stage Companies seeking to maximize results
        </p>
        <div className="explore-more-container" onMouseOver={showPopup} onClick={showPopup}>
          <div className="btn btn-left">EXPLORE MORE</div>
          <div className="explore-more-popup">
            <button className="mini-button">Home</button>
            <button className="mini-button">Services</button>
            <button className="mini-button">Portfolio</button>
            <button className="mini-button">Career Page</button>
            <button className="mini-button">Blog</button>
          </div>
        </div>
        <a className="btn btn-right" href="#">
          GET IN TOUCH
        </a>
      </div>
    </div>
  );
};

export default Showcase;

