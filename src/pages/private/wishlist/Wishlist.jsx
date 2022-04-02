import "../Private.css";
import { useWishlist } from "../../../context/context";
import { ProductCard } from "../../../components/components";

export const Wishlist = () => {
  const { wishlist } = useWishlist();

  return (
    <>
      {wishlist.length === 0 ? (
        <div className="empty-component">
          <h1 className="private-header">
            NO WISHLISTED ITEMS{" "}
            <span role="img" aria-label="sad-emoji">
              🥺💔
            </span>
          </h1>
        </div>
      ) : (
        <div className="private-component">
          <h2 className="private-header">Wishlist ({wishlist.length})</h2>
          <div className="private-products">
            {wishlist.map((wishlistProduct) => (
              <ProductCard {...wishlistProduct} key={wishlistProduct._id} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};


