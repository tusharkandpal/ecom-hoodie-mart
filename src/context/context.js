export { useCategory } from "./category-context";
export { useProduct } from "./product-context";
export { useAuth } from "./auth-context";
export { useWishlist } from "./wishlist-context";
export { useCart } from "./cart-context";
export { useTheme } from "./theme-context";

import { CategoryProvider } from "./category-context";
import { ProductProvider } from "./product-context";
import { AuthProvider } from "./auth-context";
import { WishlistProvider } from "./wishlist-context";
import { CartProvider } from "./cart-context";
import { ThemeProvider } from "./theme-context";

export function ContextProvider({ children }) {
  return (
    <>
      <AuthProvider>
        <CartProvider>
          <WishlistProvider>
            <ProductProvider>
              <CategoryProvider>
                <ThemeProvider>{children}</ThemeProvider>
              </CategoryProvider>
            </ProductProvider>
          </WishlistProvider>
        </CartProvider>
      </AuthProvider>
    </>
  );
}

