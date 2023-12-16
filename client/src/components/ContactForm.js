export default function ContactForm() {
    return (
      <form>
        <div className="d-flex justify-content-between flex-wrap gap-4">
          <div className="form-control">
            <label for="visitor-name" className="form-label">
              Name
            </label>
            <input type="text" name="visitor-name" className="form-control" placeholder="Jamie Appleseed"/>
          </div>
          <div className="form-control">
            <label for="visitor-email" className="form-label">
              Email
            </label>
            <input type="text" name="visitor-email" className="form-control" placeholder="email@email.com" />
          </div>
        </div>
        
        <div className="form-control">
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
        <button type="submit"  name="submit">
          Submit
        </button>
      </form>
    );
} 