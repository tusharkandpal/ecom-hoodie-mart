export const initialState = {
  products: [],
  status: "",
  error: "",
  loading: true,
};

export const productReducer = (state, { type, payload }) => {
  switch (type) {
    case "SUCCESS":
      return {
        ...state,
        products: payload.data,
        status: "Fetched successfully",
        loading: false,
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


