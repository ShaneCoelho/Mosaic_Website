import React from 'react'
import './Hero.css'
import mosaic1 from "../../assets/Hero/mosaic.png"
import mosaic from "../../assets/Hero/Hero-Mosaig-Img.png"

function Hero() {
    const menu = () => {
        const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
        const navLinks = document.querySelector('.nav-links');

        mobileMenuIcon.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }
    return (
        <section className="main-section">
        <section id ="home">
        <section class="hero">
            <div class="hero-content">
                <div class="mobile-menu-icon" onClick={menu}>
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>
                <ul class="nav-links">
                    <li class="forward"><a href="#home">Home</a></li>
                    <li class="center"><a href="#about-section">About</a></li>
                    <li class="upward"><a href="#event">Event</a></li>
                    <li class="center"><a href="#judges-section">Judge</a></li>
                    <li class="forward"><a href="#contact-section">Contacts</a></li>
                </ul>
            </div>

           



        </section>
        
        <div>
                <img src={mosaic} alt="" class="mosaic-img"/>
                </div>
       
            {/* <div class='mosaic-img'>
        <img style={{height: '500px',background: 'transparent'}} src={mosaic} alt=''> 

        </img>
 
          </div> */}

{/* <div className="mosaic-img">
        <img className="hero-img" src={mosaic} alt="Centered Image"/>
    </div> */}
        
        </section>
        </section>

    )
}
export default Hero