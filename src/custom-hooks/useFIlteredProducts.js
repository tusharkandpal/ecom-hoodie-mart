import { useProduct } from "../context/context";
import {
  sortByPriceFilterProducts,
  categoryFilterProducts,
  priceRangeFilterProducts,
} from "../utils/utils.js";

export const useFilteredProducts = (filteredProducts) => {
  const { productState } = useProduct();
  const { sortByPrice, categories, priceRange } = productState.filters;

  return sortByPriceFilterProducts(
    priceRangeFilterProducts(
      categoryFilterProducts(filteredProducts, categories),
      priceRange
    ),
    sortByPrice
  );
};

