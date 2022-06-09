export const initialState = {
  products: [],
  status: "",
  error: "",
  loading: true,
  filters: {
    sortByPrice: "",
    priceRange: 4000,
    categories: [],
    rating: 0,
    searchTerm: "",
  },
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

    case "SET_SEARCH_TERM":
      return {
        ...state,
        filters: { ...state.filters, searchTerm: payload.searchTerm },
      };

    case "SORT_BY_PRICE":
      return {
        ...state,
        filters: { ...state.filters, sortByPrice: payload.sort },
      };

    case "CATEGORY":
      return {
        ...state,
        filters: {
          ...state.filters,
          categories: state.filters.categories.includes(payload.category)
            ? state.filters.categories.filter(
                (category) => category !== payload.category
              )
            : [...state.filters.categories, payload.category],
        },
      };

    case "PRICE_RANGE":
      return {
        ...state,
        filters: { ...state.filters, priceRange: payload.price },
      };

    case "RATING":
      return {
        ...state,
        filters: { ...state.filters, rating: payload.rating },
      };

    case "CLEAR_ALL":
      return { ...state, filters: initialState.filters };

    default:
      return state;
  }
};


