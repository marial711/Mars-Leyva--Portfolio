import ContactForm from '../components/ContactForm';

export default function ContactSection() {
    return (
      <div className="contact-layout">
          <div className="contact-card">
            <div>
      <div className="contact-layout" id="contact">
            <h2>Get In Touch</h2>
              <p>Interested in Collaborating?</p> 
              <p>Have any Questions, Comments, Inputs?</p>
              <p> Fill out the form below and let me know how I can help you? </p>
            <ContactForm />
            </div>
            <div className="contact-bg"></div>
          </div>
      </div>
    );   
}