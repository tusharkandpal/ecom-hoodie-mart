import { useProduct } from "../context/context";
import {
  sortByPriceFilterProducts,
  categoryFilterProducts,
  priceRangeFilterProducts,
  ratingFilterProducts,
} from "../utils/utils.js";

export const useFilteredProducts = (filteredProducts) => {
  const { productState } = useProduct();
  const { sortByPrice, categories, priceRange, rating } = productState.filters;

  return sortByPriceFilterProducts(
    ratingFilterProducts(
      priceRangeFilterProducts(
        categoryFilterProducts(filteredProducts, categories),
        priceRange
      ),
      rating
    ),
    sortByPrice
  );
};

