import "./Nav.css";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/context";

export function Nav() {
  const { authState, logoutHandler } = useAuth();
  const { pathname } = useLocation();
  const { isLoggedIn } = authState;

  return (
    <nav className="navbar">
      <Link to="/">
        <h3 className="brand-name">
          <span className="brand-first-name">Hoodie</span> Mart
        </h3>
      </Link>
      <span className="search-addon">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input type="text" className="search-input" placeholder="Search" />
      </span>
      <div className="nav-right">
        {isLoggedIn ? (
          <button
            type="button"
            className="btn btn-sm primary"
            onClick={logoutHandler}
          >
            Logout
          </button>
        ) : pathname === "/login" ? (
          <button type="button" className="btn btn-sm primary">
            Signup
          </button>
        ) : (
          <Link to="/login">
            <button type="button" className="btn btn-sm primary">
              Login
            </button>
          </Link>
        )}
        <span className="badge icon-badge">
          <i className="fa-regular fa-heart badge-symbol"></i>
          <span className="badge-count">2</span>
        </span>
        <span className="badge icon-badge">
          <i className="fas fa-shopping-cart badge-symbol"></i>
          <span className="badge-count">3</span>
        </span>
        <i className="fa-solid fa-circle-half-stroke badge badge-symbol"></i>
      </div>
    </nav>
  );
}

