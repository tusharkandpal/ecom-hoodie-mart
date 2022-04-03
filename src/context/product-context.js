import { useEffect, createContext, useContext, useReducer } from "react";
import { productInitialState, productReducer } from "../reducers/reducer";
import axios from "axios";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(
    productReducer,
    productInitialState
  );
  
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/products");
        productDispatch({ type: "SUCCESS", payload: { data: data.products } });
      } catch (error) {
        productDispatch({ type: "ERROR", payload: { error: error.message } });
      }
    })();
  }, []);

  return (
    <ProductContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct };
