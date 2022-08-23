import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="loginDiv">
      <div>
        <h2 className="enterDetails">Login</h2>
      </div>

      <div className="emailDiv">
        <label htmlFor="email" className="inputLabel" id="emailID">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="inputText"
          required
          maxLength="30"
          placeholder="Enter email"
        />
      </div>

      <div>
        <label htmlFor="password" id="passwordID" className="inputLabel">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          className="inputText"
          placeholder="Enter password"
          required
          minLength="2"
          maxLength="25"
        />
      </div>

      <div className="">
        <Link to="/">
          <button type="submit" id="loginBtn">
            Login
          </button>
        </Link>
      </div>

      <div className="registerButtonDiv">
        <Link to="/register">
          <button type="submit" id="registerBtn">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
