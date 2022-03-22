export const categoryFilterProducts = (products, categories) => {
  if (categories.length !== 0)
    return categories.reduce(
      (categoryProducts, category) => [
        ...categoryProducts,
        ...products.filter((product) => product.categoryName === category),
      ],
      []
    );

  return products;
};

