export const ratingFilterProducts = (products, rating) => {
  if (rating !== 0)
    return products.filter((product) => product.rating >= rating);

  return products;
};

