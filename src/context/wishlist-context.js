import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/context";
import { addToWishlist, removeFromWishlist } from "../services/services";

const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const {
    authState: { isLoggedIn },
  } = useAuth();
  const navigate = useNavigate();

  const addToWishlistHandler = async (product) => {
    if (!isLoggedIn) {
      return navigate("/login");
    }
    const { data, status } = await addToWishlist(product);
    if (status === 201) {
      setWishlist(data.wishlist);
    }
  };

  const removeFromWishlistHandler = async (id) => {
    const { data, status } = await removeFromWishlist(id);
    if (status === 200) {
      setWishlist(data.wishlist);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        setWishlist,
        addToWishlistHandler,
        removeFromWishlistHandler,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

const useWishlist = () => useContext(WishlistContext);

export { WishlistProvider, useWishlist };


