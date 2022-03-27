import "./Login.css";
import { useAuth } from "../../../context/auth-context";

export function Login() {
  const { authState, loginHandler } = useAuth();
  const { error } = authState;

  const submitHandler = async (e) => {
    e.preventDefault();

    const form = e.target;
    const [email, password] = e.target.elements;

    // Implementing easy login for now
    email.value = "johndoe@gmail.com";
    password.value = "johnDoe123";

    if (!form.checkValidity()) form.classList.add("validate");
    else {
      loginHandler(email.value, password.value);
    }
  };

  return (
    <main className="login-main">
      <section className="login-section">
        <form
          noValidate
          className="form-container"
          onSubmit={(e) => submitHandler(e)}
        >
          <div className="form-field">
            <h3 className="login-header">Login</h3>
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
            />
            <p className="form-invalid-message">
              <i className="fas fa-info-circle"></i> Please enter your password
            </p>
          </div>
          <div className="form-field">
            <input className="form-checkbox" type="checkbox" id="terms" />
            <label htmlFor="terms" className="form-label">
              Remember me
            </label>
            <a href="#password-reset" className="form-link">
              Forgot your password ?
            </a>
          </div>
          <button className="btn btn-md primary form-btn" type="submit">
            Login
          </button>
          <a href="../signup-page/signup.html" className="link signup-link">
            Create new account <i className="fa-solid fa-greater-than"></i>
          </a>
          {error && <p className="form-error-message">{error}</p>}
        </form>
      </section>
    </main>
  );
}

