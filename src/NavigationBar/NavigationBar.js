import React from 'react';

function NavigationBar() {
  function navigateToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      // Scroll to the element
      element.scrollIntoView({ behavior: 'smooth' });

      // Adjust the scroll position by the desired offset (5px in this case)
      const offset = 5;
      window.scrollBy(0, -offset);
    }
  }

  return (
    <nav>
      <button onClick={() => navigateToSection('home')}>Home</button>
      <button onClick={() => navigateToSection('services')}>Services</button>
      <button onClick={() => navigateToSection('portfolio')}>Portfolio</button>
      <button onClick={() => navigateToSection('teams')}>Teams</button>
      <button onClick={() => navigateToSection('blog')}>Blog</button>
      <button onClick={() => navigateToSection('contact')}>Contact</button>
    </nav>
  );
}

export default NavigationBar;
