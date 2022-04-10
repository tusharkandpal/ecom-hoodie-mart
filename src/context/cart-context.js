import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/context";
import { addToCart, removeFromCart, setQuantityToCart } from "../services/services";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const {
    authState: { isLoggedIn },
  } = useAuth();
  const navigate = useNavigate();

  const addToCartHandler = async (product) => {
    if (!isLoggedIn) {
      return navigate("/login");
    }
    const { data, status } = await addToCart(product);
    if (status === 201) {
      setCart(data.cart);
    }
  };

  const removeFromCartHandler = async (id) => {
    const { data, status } = await removeFromCart(id);
    if (status === 200) {
      setCart(data.cart);
    }
  };

  const cartQuantityHandler = async (id, actionType) => {
    const { data, status } = await setQuantityToCart(id, actionType);
    if (status === 200) {
      setCart(data.cart);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCartHandler,
        removeFromCartHandler,
        cartQuantityHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };

