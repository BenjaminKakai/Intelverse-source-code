import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

import Header from './Header/Header';
import Services from './Services/Services';
import Goal from './Goal/Goal';
import Portfolio from './Portfolio/Portfolio';
import Teams from './Teams/Teams';
import Blog from './Blog /Blog';  // Note: Ensure the space is intentional after "Blog"
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Home from './Home/Home';

import NavyBlueStrip from './NavyBlueStrip/NavyBlueStrip';  // New component import
import WhiteStripWithAnimation from './WhiteStripWithAnimation/WhiteStripWithAnimation';  // New component import

import NavigationBar from './NavigationBar/NavigationBar';

import './index.css';

function AppContent() {
  const [isNavbarSticky, setNavbarSticky] = useState(false);
  const [showScrollUpBtn, setShowScrollUpBtn] = useState(false);
  const [isContactVisible, setContactVisible] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setNavbarSticky(window.scrollY > 5);
      setShowScrollUpBtn(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGoBack = () => {
    setContactVisible(false);
  };

  return (
    <div>
      <Header sticky={isNavbarSticky} onContactClick={() => setContactVisible(true)} />
      
      {isContactVisible ? (
        <Contact isVisible={isContactVisible} onGoBack={handleGoBack} />
      ) : (
        <>
          <Home />
          <NavyBlueStrip />
          <WhiteStripWithAnimation />
          <Services />
          <Goal />
          <Portfolio />
          <Teams />
          <Blog />
          <Footer />
        </>
      )}
      
      {showScrollUpBtn && <button className="scroll-up-btn" onClick={scrollToTop}>Scroll Up</button>}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

