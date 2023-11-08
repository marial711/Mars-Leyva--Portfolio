export default function ContactForm() {
    return (
      <form className="row">
        <div className="mb-3 col-6">
          <label for="visitor-name" className="form-label">
            Name
          </label>
          <input type="text" name="visitor-name" className="form-control" />
        </div>
        <div className="mb-3 col-6">
          <label for="visitor-email" className="form-label">
            Email
          </label>
          <input type="text" name="visitor-email" className="form-control" />
        </div>
        <div className="mb-3">
          <label for="visitor-msg" className="form-label">
            Message
          </label>
          <textarea
            placeholder="What can I help you with..."
            type="text"
            className="form-control"
            name="visitor-msg"
            rows="4"
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary" name="submit">
            Submit
          </button>
        </div>
      </form>
    );
} 