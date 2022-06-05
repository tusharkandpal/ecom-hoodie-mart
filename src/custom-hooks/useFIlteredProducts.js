import { useProduct } from "../context/context";
import {
  sortByPriceFilterProducts,
  categoryFilterProducts,
  priceRangeFilterProducts,
  ratingFilterProducts,
  searchFilterProducts,
} from "../utils/utils.js";

export const useFilteredProducts = (filteredProducts) => {
  const { productState } = useProduct();
  const { searchTerm, sortByPrice, categories, priceRange, rating } =
    productState.filters;

  return searchFilterProducts(
    sortByPriceFilterProducts(
      ratingFilterProducts(
        priceRangeFilterProducts(
          categoryFilterProducts(filteredProducts, categories),
          priceRange
        ),
        rating
      ),
      sortByPrice
    ),
    searchTerm
  );
};

