import ContactForm from '../components/ContactForm'; 
import GeoAlt from '../assets/svg/geo-alt.js';
import AnimatedBackground from '../components/AnimatedBackground.js';

export default function ContactSection() {
    return (
      <div className="contact-layout" id="contact">
          <div className="contact-card">
            <div className="contact-header">
              <h2>Get In Touch</h2>
                <p className="d-flex align-items-center justify-content-center gap-3">
                    <GeoAlt/> Boston, Massachusetts
                </p>
            </div>
            <ContactForm />
        </div>
          <AnimatedBackground />
      </div>
    );   
}