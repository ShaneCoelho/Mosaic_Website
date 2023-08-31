import React from "react";
import './index.css'
import Judges from "./pages/Judges/Judges";
import Mentors from "./pages/Mentors/Mentors";
import TechnicalChapter from "./pages/TechnicalChapter/TechnicalChapter";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import Schedule from "./pages/Schedule/Schedule";
import bg from "./assets/galaxy-bg.jpg";
import bg2 from "./assets/TechnicalChapter/background.jpg";

const App = () => {

  window.onload = () => {
    function createStar(maxHeight) {
      const star = document.createElement('i');
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * maxHeight);
  
      const size = Math.random() * 4;
      star.style.left = x + 'px';
      star.style.top = y + 'px';
      star.style.width = 1 + size + 'px';
      star.style.height = 1 + size + 'px';
  
      const duration = Math.random() * 2;
      star.style.animationDuration = 2 + duration + 's';
      star.style.animationDelay = duration + 's';
  
      return star;
    }
  
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const maxHeight = window.innerWidth <= 768 ? 1.001 * windowHeight : Math.max(windowHeight, documentHeight);
    const starCount = window.innerWidth <= 768 ? 20 : 180;
  
    sections.forEach((section) => {
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < starCount; i++) {
        fragment.appendChild(createStar(maxHeight));
      }
      section.appendChild(fragment);
    });
  };
  

 
  return (
    <section class="star-bg">
    <div>
        {/* style={{ backgroundImage: `url(${bg})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',}} */}

        <Hero />
        <About />
        <Judges />
        <Mentors />
        <Schedule />
        <TechnicalChapter />
      </div>
    </section>
  );
};

export default App;
