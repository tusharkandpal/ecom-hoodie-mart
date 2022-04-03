import "./CartCard.css";
import { useCart, useWishlist } from "../../../context/context";

export const CartCard = (product) => {
  const { _id, title, subTitle, imgUrl, originalPrice, sellingPrice, qty } =
    product;
  const { removeFromCartHandler, cartQuantityHandler } = useCart();
  const { wishlist, addToWishlistHandler, removeFromWishlistHandler } =
    useWishlist();

  const discount = Math.round(
    ((originalPrice - sellingPrice) / originalPrice) * 100
  );

  return (
    <div className="card card-horizontal">
      <img className="card-img-horizontal" src={imgUrl} alt={subTitle} />
      <div className="card-details-horizontal">
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <small className="card-sub-title">{subTitle}</small>
        </div>
        <div className="card-price-section">
          <strong className="selling-price">₹ {sellingPrice}</strong>
          <small className="original-price">₹ {originalPrice}</small>
          <p className="discount">({discount}% off)</p>
        </div>
        <div className="card-quantity">
          <p>
            Quantity:{" "}
            <button
              type="button"
              disabled={qty <=1 ? true : false}
              className="card-quantity-btn"
              onClick={() => cartQuantityHandler(_id, "decrement")}
            >
              <i className="fa-solid fa-minus"></i>
            </button>
            <span className="quantity-value">{qty}</span>
            <button
              type="button"
              disabled={qty >= 5 ? true : false}
              className="card-quantity-btn"
              onClick={() => cartQuantityHandler(_id, "increment")}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          </p>
        </div>
        <div className="card-horizontal-buttons">
          <button
            type="button"
            className="btn btn-md outline outline-danger card-icon"
            onClick={() => removeFromCartHandler(_id)}
          >
            <i className="fa-solid fa-trash btn-icon"></i>
            Remove from cart
          </button>

          {wishlist.some((wishlistProduct) => wishlistProduct._id === _id) ? (
            <button
              type="button"
              className="btn btn-md outline outline-info card-btn"
              onClick={() => removeFromWishlistHandler(_id)}
            >
              <i className="fa-solid fa-heart"></i>
            </button>
          ) : (
            <button
              type="button"
              className="btn btn-md outline outline-info card-btn"
              onClick={() => addToWishlistHandler(product)}
            >
              <i className="fa-regular fa-heart btn-icon"></i>
              Wishlist
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

