import React from "react";
import "./Judges\.css";
// import background from "../../assets/Judges/background.jpg"
import royston from "../../assets/Judges/royston.jpg"
import pranav from "../../assets/Judges/pranav.png"
import lekhraj from "../../assets/Judges/Lekhraj.jpeg"
import nimish from "../../assets/Judges/nimish.jpg"
import sriniwas from "../../assets/Judges/Sriniwas .jpg"
import ReactDOM from 'react-dom';

const Judges = () => {
    return (
        <div className="bodya">
        
        <header>
          <h1 className="section-title">Speakers and Judges</h1>
        </header>
        <section className="carda-container">
          
          <div className="carda">
            <img src={royston} alt="Speaker 1"/>
            <h2>Royston Dsilva</h2>
            <p>Consultant | Ex-Techlead Disney DS Smith</p>
            
          </div>

          <div className="carda">
              <img src={nimish} alt="Speaker 8"/>
              <h2>Nimish Jain</h2>
              <p>SDE || at Microsoft</p>
              
          </div> 


          <div className="carda">
              <img src={sriniwas} alt="Speaker 2"/>
              <h2>Srinivas Konduri</h2>
              <p>SDE | BITS Pilani Hyderabad '22</p>  
          </div>

          <div className="carda">
              <img src={pranav} alt="Speaker 3"/>
              <h2>Pranav Malik</h2>
              <p>SDE || at Microsoft</p>
        
          </div> 

          <div className="carda">
              <img src={lekhraj} alt="Speaker 9"/>
              <h2>Lekhraj Varahney</h2>
              <p>Senior Associate JP Morgan Chase & CO</p>
            
          </div>  
 
        </section>
        </div>
     )

}

export default Judges