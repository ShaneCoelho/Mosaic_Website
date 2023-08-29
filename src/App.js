import React from "react";
import Judges from "./pages/Judges/Judges";
import Mentors from "./pages/Mentors/Mentors";
import TechnicalChapter from "./pages/TechnicalChapter/TechnicalChapter";
import Hero from "./pages/Hero/Hero";

const App = () => {
  return (
    <div>
        <Hero />
      <Judges/>
      <Mentors/>
      <TechnicalChapter/>
    </div>
  );
};

export default App;
