import React, { useEffect, useState } from "react";
import "./TechnicalChapter.css";

const TechnicalChapter = () => {
    return (
        <>
            <div className="technical-page">
                <div className="technical-title-label">
                    <h1 className="technical-section-title">Technical Chapter Events</h1>
                </div>
                <div className="technical-container">
                    <p className="technical-text-wrapper">EESA :- BATTLE X BATTLE 2.0</p>
                    <p className="technical-text-wrapper">IEEE :- RADIANT RUMBLE</p>
                    <p className="technical-text-wrapper">MESA :- MOSAIC -LOCKADES V8</p>
                    <p className="technical-text-wrapper">ISTE :- BOMBSQUAD: THE LEGACY</p>
                    <p className="technical-text-wrapper">CODEX :- ALPHA PROTOCOL 2.0</p>
                    <p className="technical-text-wrapper">CSI :- BACK TO THE FUTURE</p>
                    <p className="technical-text-wrapper">SKDC :- MUGGLE QUIDDITCH MATC</p>
                    <p className="technical-text-wrapper">ITSA :- RACING RIVALS</p>
                    <p className="technical-text-wrapper">IETE :- MYSTICAL MARVELS</p>
                </div>
            </div>
        </>
    )
}

export default TechnicalChapter;