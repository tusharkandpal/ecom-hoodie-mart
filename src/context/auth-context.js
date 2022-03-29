import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect, createContext, useContext, useReducer } from "react";
import { authInitialState, authReducer } from "../reducers/reducer";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const navigate = useNavigate();

  const loginHandler = async (email, password) => {
    try {
      const { data } = await axios.post("/api/auth/login", {
        email: email,
        password: password,
      });
      authDispatch({ type: "LOGIN", payload: { user: data.foundUser } });
      localStorage.setItem("encodedToken", data.encodedToken);
      localStorage.setItem("user", JSON.stringify(data.foundUser));
      navigate("/", { replace: true });
    } catch (error) {
      authDispatch({ type: "FAILED", payload: { path: "Login" } });
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("encodedToken");
    localStorage.removeItem("user");
    localStorage.removeItem("wishlist");
    authDispatch({ type: "LOGOUT" });
    navigate("/", { replace: true });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        loginHandler,
        logoutHandler,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { AuthProvider, useAuth };


