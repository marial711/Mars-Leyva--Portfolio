import ContactForm from '../components/ContactForm'; 
import GeoAlt from '../assets/svg/geo-alt.js';
import Questions from '../assets/images/any-questions.png';

import {FadingCircles} from '../components/AnimatedBackground.js';

export default function ContactSection() {
    return (
        <div className="row justify-content-evenly align-content-center align-items-center contact-layout" id="contact">
          <img className="col-lg-6 col-md-4 col-sm-3 bitmoji" src={Questions} alt="Bitmoji asking" height="auto" width="auto"/>
          <div className="col-lg-6 col-md-8 col-sm-9 contact-card ">
            <div className="contact-header">
              <h2>Get In Touch</h2>
              <p className="d-flex align-items-center justify-content-center gap-3">
                <GeoAlt /> Boston, Massachusetts
              </p>
            </div>
            <ContactForm />
          </div>
        <FadingCircles />
      </div>
    
      
    );   
}