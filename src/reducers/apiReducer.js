export const initialState = {
  data: [],
  status: "",
  error: "",
  loading: true,
};

export const APIReducer = (state, { type, payload }) => {
  switch (type) {
    case "SUCCESS":
      return {
        ...state,
        data: payload.data,
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


