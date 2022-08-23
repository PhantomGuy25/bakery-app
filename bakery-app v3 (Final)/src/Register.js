import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="registerDiv">
      <div>
        <h2 className="enterDetails">Register</h2>
      </div>

      <div>
        <label htmlFor="name" id="nameID" className="inputLabel">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="inputText"
          placeholder="Enter name"
          required
          minLength="2"
          maxLength="25"
        />
      </div>

      <div>
        <label htmlFor="contact" id="contactID" className="inputLabel">
          Contact
        </label>
        <input
          type="number"
          name="contact"
          id="contact"
          className="inputText"
          placeholder="Enter contact"
          required
          minLength="8"
          maxLength="10"
        />
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

      <div>
        <label htmlFor="repassword" id="repasswordID" className="inputLabel">
          Password
        </label>
        <input
          type="password"
          name="repassword"
          id="repassword"
          className="inputText"
          placeholder="Re-enter password"
          required
          minLength="2"
          maxLength="25"
        />
      </div>

      <div className="registerButtonDiv">
        <Link to="/">
          <button type="submit" id="registerBtn">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
}
