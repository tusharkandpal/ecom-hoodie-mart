export const priceRangeFilterProducts = (products, priceRange) => {
  if (priceRange !== 4000)
    return products.filter((product) => product.sellingPrice <= priceRange);

  return products;
};

