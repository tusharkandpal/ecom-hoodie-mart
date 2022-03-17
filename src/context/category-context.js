import { createContext, useContext, useReducer } from "react";
import { initialState, categoryReducer } from "../reducers/categoryReducer";

const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const [categoryState, categoryDispatch] = useReducer(categoryReducer, initialState);

  return (
    <CategoryContext.Provider value={{ categoryState, categoryDispatch }}>
      {children}
    </CategoryContext.Provider>
  );
};

const useCategory = () => useContext(CategoryContext);

export { CategoryProvider, useCategory };
