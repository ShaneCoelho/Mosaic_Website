import React, { useEffect, useState } from "react";
import "./EventHighlight.css";
import bg1 from "../../assets/EventHighlight/bg1.png";
import r1 from "../../assets/EventHighlight/r1.png";
import r2 from "../../assets/EventHighlight/r2.png";


const EventHighlight = () => {
    return (
        <section id ="event">
        
            <div className="event-highlight">
                <div className="event-title-label">
                    <h1 className="event-section-title">Event Highlights</h1>
                </div>
                <main>
                    <div className="info">
                        <p className="event-info-p">HACKX 1.0 NATIONAL <br /> LEVEL HACKATHON</p>
                    </div>

                    <br />
                    <div className="event-icon-con">
                        <p>"Compete, Collaborate, Innovate " </p>
                        <p className="event-date"><i className="fas fa-calendar"></i> 15th - 16th September</p>
                        <p><i className="fas fa-clock"></i> 12:00pm (15th) - 12:00pm (16th)</p>
                        <p className="event-loc"><i className="fas fa-map-marker-alt"></i> College Campus</p>
                    </div>
                    <br />
                    <div className="event-info-1">
                        <p>ROBOZONE ROBO <br />SOCCER<br /> CHALLENGE</p>
                    </div>

                    <br />
                    <div className="event-icon-con">
                        <p>"Witness the Future of Robotics" </p>
                        <p className="event-date-1"><i className="fas fa-calendar"></i>16th September</p>
                        <p className="event-clock-1"><i className="fas fa-clock"></i>9:00am - 4:00pm</p>
                        <p className="event-loc-1"><i className="fas fa-map-marker-alt"></i>Robotics Arena</p>
                    </div>
                </main>
            </div>
    </section>
    
    )
}

export default EventHighlight;