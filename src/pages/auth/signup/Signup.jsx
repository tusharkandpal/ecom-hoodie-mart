import "./Signup.css";
import { useAuth, useTheme } from "../../../context/context";
import { Link } from "react-router-dom";

export function Signup() {
  const { authState, signupHandler } = useAuth();
  const { error } = authState;
  const { theme } = useTheme();

  const submitHandler = async (e) => {
    e.preventDefault();

    const form = e.target;

    if (!form.checkValidity()) form.classList.add("validate");
    else {
      const [email, password] = e.target.elements;
      signupHandler(email.value, password.value);
    }
  };

  return (
    <main className={`signup-main ${theme}`}>
      <section className="signup-section">
        <form
          noValidate
          className={`form-container ${theme}`}
          onSubmit={(e) => submitHandler(e)}
        >
          <div className="form-field">
            <h3 className="signup-header">Signup</h3>
            <label className="form-label required" htmlFor="email">
              Email
            </label>
            <input
              className="form-input"
              id="email"
              type="email"
              placeholder="abc@xyz.com"
              required
            />
            <p className="form-invalid-message">
              <i className="fas fa-info-circle"></i> Please enter correct email!
            </p>
            <p className="form-valid-message">
              <i className="fas fa-check-circle"></i> That's right!
            </p>
          </div>
          <div className="form-field">
            <label className="form-label required" htmlFor="password">
              Password
            </label>
            <input
              className="form-input"
              id="password"
              type="password"
              placeholder="************"
              required
              minLength="6"
            />
            <p className="form-invalid-message">
              <i className="fas fa-info-circle"></i> Please enter atleast 6
              characters!
            </p>
            <p className="form-valid-message">
              <i className="fas fa-check-circle"></i> Strong password!
            </p>
          </div>
          <div className="form-field">
            <input
              className="form-checkbox"
              type="checkbox"
              id="terms"
              required
            />
            <label htmlFor="terms" className="form-label required">
              I accept all Terms & Conditions
            </label>
            <p className="form-checkbox-message">
              <i className="fas fa-info-circle"></i> You must agree before
              submitting!
            </p>
          </div>
          <button className="btn btn-md primary form-btn" type="submit">
            Create new account
          </button>
          <Link to="/login" className="link login-link">
            Already have an account <span className="arrow">&gt;</span>
          </Link>
          {error && <p className="form-error-message">{error}</p>}
        </form>
      </section>
    </main>
  );
}
