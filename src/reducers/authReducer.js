export const authInitialState = {
  user: {},
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
