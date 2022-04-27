export const authInitialState = {
  ...(localStorage.getItem("encodedToken") !== null
    ? {
        user: JSON.parse(localStorage.getItem("user")),
        isLoggedIn: true,
      }
    : {
        user: {},
        isLoggedIn: false,
      }),
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

    case "SIGNUP":
      return {
        ...state,
        user: payload.user,
        isLoggedIn: true,
      };

    case "LOGOUT": 
      return authInitialState;

    case "FAILED":
      return { ...state, error: `${payload.path} failed! Please try again.` };

    case "RESET":
      return authInitialState;

    default:
      return state;
  }
};
