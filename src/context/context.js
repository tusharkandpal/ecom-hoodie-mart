export { useCategory } from "./category-context";
export { useProduct } from "./product-context";
export { useAuth } from "./auth-context";
export { useWishlist } from "./wishlist-context";
import { CategoryProvider } from "./category-context";
import { ProductProvider } from "./product-context";
import { AuthProvider } from "./auth-context";
import { WishlistProvider } from "./wishlist-context";

export function ContextProvider({ children }) {
  return (
    <>
      <AuthProvider>
        <WishlistProvider>
          <ProductProvider>
            <CategoryProvider>{children}</CategoryProvider>
          </ProductProvider>
        </WishlistProvider>
      </AuthProvider>
    </>
  );
}

