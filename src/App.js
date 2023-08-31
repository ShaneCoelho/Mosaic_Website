import React from "react";
import './index.css'
import Judges from "./pages/Judges/Judges";
import Mentors from "./pages/Mentors/Mentors";
import TechnicalChapter from "./pages/TechnicalChapter/TechnicalChapter";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import bg from "./assets/galaxy-bg.jpg";
import bg2 from "./assets/TechnicalChapter/background.jpg";
import Schedule from "./pages/Schedule/Schedule";
import ChiefGuest from "./pages/ChiefGuest/ChiefGuest";
import ContactUs from "./pages/ContactUs/ContactUs";


const App = () => {

  window.onload = () => {
    function stars(section, maxHeight, count) {
      var i = 0;

      while (i < count) {
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

        section.appendChild(star);
        i++;
      }
    }

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
      let maxHeight = Math.max(window.innerHeight, document.documentElement.scrollHeight);
      let starCount = 200;

      if (window.innerWidth <= 768) {
        maxHeight /= 1.1;
        starCount = 20;
      }

      stars(section, maxHeight, starCount);
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
        <ChiefGuest />
        <Judges />
        <Mentors />
        <Schedule />
        <TechnicalChapter />
        <ContactUs />
      </div>
    </section>
  );
};

export default App;
