export const initialState = {
  categories: [],
  status: "",
  error: "",
  loading: true,
};

export const categoryReducer = (state, { type, payload }) => {
  switch (type) {
    case "SUCCESS":
      return {
        ...state,
        categories: payload.data,
        status: "Fetched successfully",
        loading: false
      };
    case "ERROR":
      return {
        ...state,
        error: payload.error,
        loading: false,
      };
    default:
      return state;
  }
};


