export default function Login(){
    return (
      <form className="min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <label for="email" className="form-label">
          Enter Email:
          <input className="form-control" type="text" name="email" />
        </label>
        <label className="form-label">
          Enter Password:
          <input for="password" className="form-control" type="password"  name="password"/>
        </label>
        <input type="submit" className="btn btn-primary" />
      </form>
    );
}