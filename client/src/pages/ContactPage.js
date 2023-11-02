import ContactForm from '../components/ContactForm';

export default function ContactSection() {
    return (
    <div id="contact-section" className="min-vh-75">
        <h2>Contact</h2>
        <p>Want to know more information? <br />Fill out the form below and let me know how I can help  you?</p>
        <div className="d-flex justify-content-center flex-column align-items-center">
            <ContactForm />
        </div>
    </div>
    )   
}