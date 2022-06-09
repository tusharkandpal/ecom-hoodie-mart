export const searchFilterProducts = (products, searchTerm) => {

  if (searchTerm) {
    return products.filter((product) =>
      product.subTitle.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return products;
};
