import React from 'react'
import './About.css'

function About() {
  return (
    <section class="about">
       <header>
          <h1 class="about-section-title">About Us</h1>
          {/* &nbsp;&nbsp;&nbsp;&nbsp;<h1 class="section-title">us</h1> */}
        </header>
        <div class='about-content'>
          <p class='about-txt'>
          We are excited to unveil the silver jubilee edition of MOSAIC  an annual TechFest hosted by Student Council of St. Francis Institute of Technology (SFIT). MOSAIC isn't just an event; it's a celebration of curiosity, creativity, and collaboration. 
          It is a unique technical event that unites the college's various technical committees in a collaborative effort to design engaging and innovative games.
          Each committee utilizes its specialized skills in technology, fine arts, and crafts to create a spectrum of enjoyable and imaginative activities.
          Reflecting on the array of traditional games that have been an integral part of MOSAIC's tech fest over the past 25 years, we're excited to introduce a fresh chapter this year.
         <p class='about-txt'>
          We are thrilled to announce the addition of two brand-new events : HackX, an exhilarating hackathon that will put your problem-solving skills to the test, and Robozone,
          a captivating robot-building competition that invites you to unleash your engineering expertise . 
          With these innovative additions, MOSAIC 2023 is set to be a fusion of time-honored favorites and cutting-edge 
          challenges that will elevate the excitement and engagement to new heights.</p> 
          </p>
          </div>
    </section>
  )
}

export default About