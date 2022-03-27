export const authInitialState = {
  user: localStorage.getItem("encodedToken") !== null ? JSON.parse(localStorage.getItem("user")) : {},
  isLoggedIn: false,
  error: "",
};

export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        user: payload.user,
        isLoggedIn: true,
      };

    case "LOGOUT":
      return authInitialState;

    case "FAILED":
      return { ...state, error: `${payload.path} failed! Please try again.` };

    default:
      return state;
  }
};
