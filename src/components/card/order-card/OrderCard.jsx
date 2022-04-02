import { useCart } from "../../../context/cart-context";

export function OrderCard() {
  const { cart } = useCart();

  const totalCartDiscount = cart.reduce(
    (totalSavings, product) =>
      product.qty * (product.originalPrice - product.sellingPrice) +
      totalSavings,
    0
  );

  const totalCartOriginalPrice = cart.reduce(
    (totalOriginalPrice, product) =>
      product.qty * product.originalPrice + totalOriginalPrice,
    0
  );

  const totalCartSellingPrice = cart.reduce(
    (totalSellingPrice, product) =>
      product.qty * product.sellingPrice + totalSellingPrice,
    0
  );

  const totalCartItems = cart.reduce(
    (totalCartQty, product) =>
      product.qty + totalCartQty,
    0
  );

  return (
    <div className="card card-text-only">
      <h3 className="card-text-title">PRICE DETAILS</h3>
      <hr className="line-separate" />
      <p className="card-text-item">
        <span className="card-text-label">
          Price (<span>{totalCartItems}</span> items){" "}
        </span>
        <span>₹ {totalCartOriginalPrice}</span>
      </p>
      <p className="card-text-item">
        <span className="card-text-label">Discount</span>
        <span className="discount-charges">- ₹ {totalCartDiscount}</span>
      </p>
      <p className="card-text-item">
        <span className="card-text-label">Delivery charges</span>
        <span>
          <span className="original-price">199</span>
          <span className="discount-charges">Free</span>
        </span>
      </p>
      <hr className="line-separate" />
      <p className="card-text-item">
        <span className="card-text-label">
          <strong>TOTAL AMOUNT</strong>
        </span>
        <strong>₹ {totalCartSellingPrice}</strong>
      </p>
      <hr className="line-separate" />
      <p className="card-text-label">
        {" "}
        You have saved
        <strong className="discount-charges"> ₹ {totalCartDiscount} </strong>
        on this purchase.
      </p>
      <button type="button" className="btn btn-lg primary">
        <i className="fa-solid fa-bag-shopping btn-icon"></i> Place Order{" "}
      </button>
    </div>
  );
}
