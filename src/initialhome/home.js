import React, { useState, useEffect, useRef } from "react";
import homeVideo from "../home video.mp4";
import './Home.css';
import Contact from '../Contact/Contact';

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  


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

  const numberOfDuplicates = 1000;
  const duplicatedImages = Array.from({ length: numberOfDuplicates }, () => [...images]).flat();

  const inputRef = useRef(null);
  const imageContainerRef = useRef(null);

  const animationDuration = 30;
  const timeGap = animationDuration / duplicatedImages.length;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (!showMenu) {
      setTimeout(() => setShowMenu(false), 5000);
    }
  };

  const toggleChat = () => {
    setShowChat(true);
  };

  const sendMessage = () => {
    setMessageSent(true);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  const closeMenu = () => setShowMenu(false);

  useEffect(() => {
    let timer;
    if (messageSent) {
      timer = setTimeout(() => {
        setShowChat(false);
        setMessageSent(false);
      }, 5000);
    }

    return () => clearTimeout(timer);
  }, [messageSent]);

  useEffect(() => {
    const carouselTimer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);
    return () => clearInterval(carouselTimer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const whiteStrip = document.querySelector('.white-strip');
      const navyBlueStrip = document.querySelector('.navy-blue-strip');

      if (scrollPosition > 100) {
        whiteStrip.style.position = 'static';
        navyBlueStrip.style.position = 'static';
      } else {
        whiteStrip.style.position = 'fixed';
        navyBlueStrip.style.position = 'fixed';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    function handleResize() {
      const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
      const homeSlider = document.querySelector('.home-slider');
      if (homeSlider) {
        if (vh > 600) {
          homeSlider.style.height = '85vh';
        } else {
          homeSlider.style.height = '600px';
        }
      }
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  

  return (
    <div className="container">
      <div className="home-slider" id="home">
        <video className="background-video" id="background-video" autoPlay loop muted>
          <source src={homeVideo} type="video/mp4" />
        </video>

        <div className="home-content">
          <h1>
            Driving changes through <br />AI &amp; Data Solutions
          </h1>
          <button className="btn btn-case-studies" onClick={() => window.open("https://intelliverseai.com/blog/", "_blank")}>
    Read Case Studies
</button>
          <button className="btn btn-secondary" onClick={() => setShowContactForm(true)}>
            Let's talk
          </button>
          
          
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

          {showMenu && (
            <div className="dropdown-menu">
              <span className="dropdown-close" onClick={closeMenu}>X</span>
              <a href="#home">Home</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#teams">Teams</a>
              <a href="#blog">Blog</a>
              
            </div>
          )}

          {showChat && (
            <div className="chat-dialogue">
              <p>Hello, how can I be of help today?</p>
              <textarea ref={inputRef} placeholder="Type your text here..."></textarea>
              <button onClick={sendMessage}>Send</button>
              {messageSent && (
                <p>Thank you for reaching out. An expert will be in touch with you shortly.</p>
              )}
            </div>
          )}



<div>
<div className="white-strip">
 <span style={{ color: 'black', zIndex: 2 }}>Our Clients</span>
  <span className="our-clients">Our Clients</span>
  <div className="client-logos">
    <div className="logo-slider">
      {duplicatedImages.map((image, index) => {
        let companyLink = "#"; // Placeholder link
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
              style={{
                animationDelay: `${(index % 5) * 2}s`,
              }}
            />
          </a>
        );
      })}
    </div>
  </div>
  </div>



      </div>
    </div>
    </div>
   
{showContactForm && <Contact isVisible={true} onGoBack={() => setShowContactForm(false)} />}</div>
  );
};

export default Home;
