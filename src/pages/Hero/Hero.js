import React from 'react'
import './Hero.css'

function Hero() {
    const menu = () => {
        const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
        const navLinks = document.querySelector('.nav-links');
    
        mobileMenuIcon.addEventListener('click', function () {
            navLinks.classList.toggle('active');
        });
    }
    
  return (
<section class="hero">
    <div class="hero-content">
        <div class="mobile-menu-icon" onClick={menu}>
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li class="center"><a href="#">About</a></li>
            <li class="upward"><a href="#">Event</a></li>
            <li class="center"><a href="#">Judge</a></li>
            <li class="forward"><a href="#">Contacts</a></li>
        </ul>
    </div>
</section>

  )
}
export default Hero