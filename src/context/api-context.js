import { createContext, useContext, useReducer } from "react";
import { initialState, APIReducer } from "../reducers/apiReducer";

const APIContext = createContext();

const APIProvider = ({ children }) => {
  const [APIState, APIDispatch] = useReducer(APIReducer, initialState);

  return (
    <APIContext.Provider value={{ APIState, APIDispatch }}>
      {children}
    </APIContext.Provider>
  );
};

const useAPI = () => useContext(APIContext);

export { APIProvider, useAPI };
