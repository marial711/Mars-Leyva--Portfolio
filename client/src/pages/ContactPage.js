import ContactForm from '../components/ContactForm';

export default function ContactSection() {
    return (
      <div className="min-vh-100 d-flex flex-column justify-content-around">
        <div>
          <h2>Contact</h2>
          <p>
            Want to know more information? <br />
            Fill out the form below and let me know how I can help you?
          </p>
        </div>
        <div className="d-flex justify-content-center flex-column align-items-center">
          <ContactForm />
        </div>
      </div>
    );   
}