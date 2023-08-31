import React from 'react'
import './Schedule.css';
import Planet1 from '../../assets/events/planet-01.png';
import Planet2 from '../../assets/events/planet-02.png';
import Planet3 from '../../assets/events/planet-03.png';
import Planet4 from '../../assets/events/planet-04.png';
import Planet5 from '../../assets/events/planet-05.png';
import Planet6 from '../../assets/events/planet-06.png';
import Planet7 from '../../assets/events/planet-07.png';
import EventData from '../Schedule/EventData'

const planets = [
    Planet1,
    Planet2,
    Planet3,
    Planet4,
    Planet5,
    Planet6,
    Planet7,
]


const Schedule = () => {


    return (
        <section id='event'>
            <React.Fragment>
                {
                    EventData.map((e, i) => {
                        return (
                            <div key={i} >
                                <div className="row mt-3">
                                    <div className="glow-text col-12 text-center">{e.title}</div>

                                    <div className="glow-desc col-12 text-center">{e.date}</div>
                                </div>
                                {
                                    e.timeline.map((tl, j) => {
                                        return (
                                            <div className="container-fluid" key={j}>
                                                <div className="timeline">
                                                    {
                                                        j % 2 === 0 ?
                                                            <div className="event left" >
                                                                <img src={planets[j % 7]} alt="planet" className="event-img" />
                                                                <div className="event-container">
                                                                    <div className="event-date">{tl.time}</div>
                                                                    <div className="event-description">{tl.desc}</div>
                                                                </div>
                                                            </div>
                                                            :
                                                            <div className="event right">
                                                                <img src={planets[j % 7]} alt="planet" className="event-img" />
                                                                <div className="event-container">
                                                                    <div className="event-date">{tl.time}</div>
                                                                    <div className="event-description">{tl.desc}</div>
                                                                </div>
                                                            </div>}


                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        );
                    }
                    )
                }

            </React.Fragment>
        </section>
    )
}

export default Schedule