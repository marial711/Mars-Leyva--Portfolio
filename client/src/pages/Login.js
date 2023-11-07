export default function Login(){
    return (
      <form className="min-h-screen flex flex-col items-center justify-center gap-8">
        <label for="email" className="form-label">
          Enter Email:
          <input className="form-control" type="text" name="email" />
        </label>
        <label className="form-label">
          Enter Password:
          <input for="password" className="form-control" type="password"  name="password"/>
        </label>
        <input type="submit" />
      </form>
    );
}