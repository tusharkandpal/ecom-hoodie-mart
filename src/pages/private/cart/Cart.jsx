import "../Private.css";
import { CartCard, OrderCard } from "../../../components/components";
import { useCart } from "../../../context/context";

export function Cart() {
  const { cart } = useCart();

  return (
    <>
      {cart.length === 0 ? (
        <div className="empty-component">
          <h1 className="private-header">
            NO ITEMS IN CART{" "}
            <span role="img" aria-label="sad-emoji">
              🥺💔
            </span>
          </h1>
        </div>
      ) : (
        <div className="private-component">
          <h2 className="private-header">Cart ({cart.length})</h2>
          <div className="cart-details">
            <div className="private-products">
              {cart.map((cartProduct) => (
                <CartCard {...cartProduct} key={cartProduct._id} />
              ))}
            </div>
            <div className="cart-order">
              <OrderCard />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
