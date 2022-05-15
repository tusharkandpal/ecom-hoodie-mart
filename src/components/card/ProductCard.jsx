import "./ProductCard.css";
import { Link } from "react-router-dom";
import { useWishlist, useCart, useTheme } from "../../context/context";

export const ProductCard = (product) => {
  const {
    _id,
    title,
    subTitle,
    imgUrl,
    originalPrice,
    sellingPrice,
    quantity,
    rating,
  } = product;

  const discount = Math.round(
    ((originalPrice - sellingPrice) / originalPrice) * 100
  );
  const { wishlist, addToWishlistHandler, removeFromWishlistHandler } =
    useWishlist();
  const { cart, addToCartHandler } = useCart();
  const { theme } = useTheme();

  return (
    <div className={`card card-vertical ${theme}`}>
      <div className="card-overlay-container">
        <img className="card-img" src={imgUrl} alt="product" />
        <small
          className={`card-badge ${
            rating < 1.5 ? "red-bg" : rating < 3 ? "yellow-bg" : "green-bg"
          }`}
        >
          {rating} <i className="fa-solid fa-star"></i>
        </small>
      </div>
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <small className="card-sub-title">{subTitle}</small>
      </div>
      <div className="card-price-section">
        <strong className="selling-price">₹{sellingPrice}</strong>
        <small className="original-price">₹{originalPrice}</small>
        <p className="discount">({discount}% off)</p>
      </div>
      {quantity < 10 && (
        <small style={{ color: "red", marginLeft: "0.6rem" }}>
          Hurry! Only few items left.
        </small>
      )}
      <div className="card-buttons">
        {cart.some((cartProduct) => cartProduct._id === _id) ? (
          <Link to="/cart">
            <button type="button" className="btn btn-sm primary">
              <i className="fas fa-shopping-cart btn-icon"></i>Go to cart
            </button>
          </Link>
        ) : (
          <button
            type="button"
            className="btn btn-sm primary"
            onClick={() => addToCartHandler(product)}
          >
            <i className="fa-solid fa-cart-plus btn-icon"></i>
            Add to cart
          </button>
        )}
        {wishlist.some((wishlistProduct) => wishlistProduct._id === _id) ? (
          <button
            type="button"
            className={`btn btn-sm outline outline-info card-icon ${theme}`}
            onClick={() => {
              removeFromWishlistHandler(_id);
            }}
          >
            <i className="fa-solid fa-heart"></i>
          </button>
        ) : (
          <button
            type="button"
            className={`btn btn-sm outline outline-info card-icon ${theme}`}
            onClick={() => addToWishlistHandler(product)}
          >
            <i className="fa-regular fa-heart btn-icon"></i>
            Wishlist
          </button>
        )}
      </div>
    </div>
  );
};

