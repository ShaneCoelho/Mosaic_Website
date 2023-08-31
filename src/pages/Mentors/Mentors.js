import React from "react";
import "./Mentors\.css";
import background from "../../assets/Judges/background.jpg"
import dishant from "../../assets/Mentors/dishant.png"
import prajakta from "../../assets/Mentors/prajakta.png"
import vishek from "../../assets/Mentors/vishek.png"
import yash from "../../assets/Mentors/yash.jpg"
import ReactDOM from 'react-dom';

const Mentors = () => {
    return (
        <div className="bodies">
        
        <header>
          <h1>Mentors</h1>
        </header>
        <section className="cardi-container">
          
          <div className="cardi">
            <img src={dishant} alt="Speaker 1"/>
            <h2>Dishnat Zaveri</h2>
            <p>Singapore Indias Hackathon '23 winner | Smart India Hackathon '22 Winner| 9x Hackathon winner</p>
            
          </div>

          <div className="cardi">
              <img src={prajakta} alt="Speaker 2"/>
              <h2>Prajakta Kadam</h2>
              <p>Co-Founder of Techvalley | Microsoft Student Ambassador</p>
              
          </div> 


          <div className="cardi">
              <img src={vishek} alt="Speaker 3 "/>
              <h2>Vishek Pratap</h2>
              <p>Co-Founder of Techvalley | Devrel Evangelist | Mentor at 130+ events </p>  
          </div>

          <div className="cardi">
              <img src={yash} alt="Speaker 4"/>
              <h2>Yash Joshi</h2>
              <p>Smart India hackathon '22 winner | 9x hackathon winner </p>  
          </div>
          
        </section>
        </div>
     )

}

export default Mentors