import React, { useEffect, useState } from "react";
import "./ChiefGuest.css";
import arsh_goyal from "../../assets/ChiefGuest/arsh_goyal.jpg"


const ChiefGuest = () => {
    return (
        <>
                <section id="chief-guest">

                <div className="chief-title-label">
                    <h1 className="chief-section-title">Chief Guest</h1>
                </div>

                    <div className="guest-container-flex">
                        <div className="guest-container">
                            <img className="guest-img" src={arsh_goyal} alt="Arsh Goyal" />
                            <h2 className="guest-name">ARSH GOYAL</h2>

                            <p className="guest-experience">
                                SENIOR SDE, EX-ISRO, CODECHEF & SAMSUNG
                            </p>
                            <p className="guest-social">
                                YOUTUBE 150K+ | INSTAGRAM 190K+ | LINKEDIN 170K+
                            </p>
                        </div>
                    </div>
                </section>

            
        </>
    )
}

export default ChiefGuest;