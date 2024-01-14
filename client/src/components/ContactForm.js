import { useState } from "react";

export default function ContactForm() {
    const [submitStatus, setSubmitStatus] = useState("Submit");
    const [emailInfo, setEmailInfo] = useState({
      name: "",
      email: "",
      message: "",
    });

    const handleChange = (e) => {
      setEmailInfo({...emailInfo, [e.target.name]:e.target.value});
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setSubmitStatus(`Sending...`);
      console.log(emailInfo);

      let response = await fetch("/", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
        body: JSON.stringify({ emailInfo }),
      });

      if(e) {
        setSubmitStatus(`Message Failed`);
        console.error(e);
      } else {
        await response.json();
        setSubmitStatus(`Sent!`);
      }
    };

    return (
      <form onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" 
                name="name" 
                className="form-control" 
                placeholder="Jamie Appleseed"
                value={emailInfo.name}
                onChange={handleChange}/>
          </div>

          <div className="form-control">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input type="text" 
              name="email" 
              className="form-control" 
              placeholder="email@email.com" 
            value={emailInfo.email}
            onChange={handleChange}/>
          </div>
        
        <div className="form-control">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea placeholder="What can I help you with..." type="text"
            className="form-control"
            name="message"
            value={emailInfo.message}
            onChange={handleChange}
            rows="4"
          ></textarea>
        </div>

        <button type="submit"  name="submit">{submitStatus}</button>
      </form>
    );
} 