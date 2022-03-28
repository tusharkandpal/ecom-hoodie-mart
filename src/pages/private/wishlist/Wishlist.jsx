import "./Wishlist.css";
import { useWishlist } from "../../../context/context";
import { ProductCard } from "../../../components/components";

export const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <>
      {wishlist.length === 0 ? (
        <div className="wishlist-main">
          <h1 className="wishlist-header">
            NO WISHLISTED ITEMS{" "}
            <span role="img" aria-label="sad-emoji">
              🥺💔
            </span>
          </h1>
        </div>
      ) : (
        <div>
          <h2 className="wishlist-header">Wishlist ({wishlist.length})</h2>
          <div className="products-layout">
            {wishlist.map((wishlistProduct) => (
              <ProductCard {...wishlistProduct} key={wishlistProduct._id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};


