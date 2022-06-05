import "./Nav.css";
import { useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  useProduct,
  useAuth,
  useWishlist,
  useCart,
  useTheme,
} from "../../context/context";

export function Nav() {
  const { authState, logoutHandler } = useAuth();
  const { pathname } = useLocation();
  const { wishlist, setWishlist } = useWishlist();
  const { cart, setCart } = useCart();
  const { isLoggedIn } = authState;
  const { theme, setTheme } = useTheme();
  const {
    productState: {
      filters: { searchTerm },
    },
    productDispatch,
  } = useProduct();
  const navigate = useNavigate();

  useEffect(() => {
    setWishlist([]);
    setCart([]);
  }, [isLoggedIn]);

  return (
    <nav className="navbar">
      <Link to="/">
        <h3 className="brand-name">
          <span className="brand-first-name">Hoodie</span> Mart
        </h3>
      </Link>
      <span className="search-addon">
        <i className="fa-solid fa-magnifying-glass search-icon"></i>
        <input
          type="text"
          className={`search-input ${theme}`}
          value={searchTerm}
          placeholder="Search"
          onChange={(e) => {
            productDispatch({
              type: "SET_SEARCH_TERM",
              payload: { searchTerm: e.target.value },
            });
            navigate("/product-listing");
          }}
        />
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
          <Link to="/signup">
            <button type="button" className="btn btn-sm primary">
              Signup
            </button>
          </Link>
        ) : (
          <Link to="/login">
            <button type="button" className="btn btn-sm primary">
              Login
            </button>
          </Link>
        )}

        <span className="badge icon-badge">
          <Link to="/wishlist">
            <i className="fa-regular fa-heart badge-symbol"></i>
            <span className="badge-count">{wishlist.length}</span>
          </Link>
        </span>
        <span className="badge icon-badge">
          <Link to="/cart">
            <i className="fas fa-shopping-cart badge-symbol"></i>
            <span className="badge-count">{cart.length}</span>
          </Link>
        </span>
        <i
          className="fa-solid fa-circle-half-stroke badge badge-symbol"
          onClick={() =>
            setTheme((theme) => (theme === "light" ? "dark" : "light"))
          }
        ></i>
      </div>
    </nav>
  );
}

