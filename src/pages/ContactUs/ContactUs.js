import React from 'react'
import './ContactUs.css'
import Astronaut from '../../assets/ContactUs/astronaut.png'

const ContactUs = () => {
    return (
        <React.Fragment>
            <header>
                <h1 class="section-title">Contact Us</h1>
            </header>
            <div className='earthbg row justify-content-center'>
                <div className='col-md-5'>
                    <img src={Astronaut} className='astronaut-img' alt='astronaut' />
                </div>
                <div className='col-md-6  contact_div align-self-center mx-3'>
                    <div>
                        <h3 className='name'>Stalen Ferreira:</h3>
                        <h3 className='contact'>+91 8879603443</h3>
                    </div>
                    <div>
                        <h3 className='name'>Swastik Sawant:</h3>
                        <h3 className='contact'>+91 8657831612</h3>
                    </div>
                    <div>
                        <h3 className='name'>Chris Dias:</h3>
                        <h3 className='contact'>+91 9637261594</h3>
                    </div>


                </div>
            </div>
        </React.Fragment>
    )
}

export default ContactUs