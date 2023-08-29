import React from "react";
import Judges from "./pages/Judges/Judges";
import Mentors from "./pages/Mentors/Mentors";
import TechnicalChapter from "./pages/TechnicalChapter/TechnicalChapter";
import Hero from "./pages/Hero/Hero";
import About from "./pages/About/About";
import bg from "./assets/galaxy-bg.jpg";
import bg2 from "./assets/TechnicalChapter/background.jpg";

const App = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',}} >
      <Hero />
      <About />
      <Judges/>
      <Mentors/>
      <TechnicalChapter/>
    </div>
  );
};

export default App;
