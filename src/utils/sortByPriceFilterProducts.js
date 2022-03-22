export const sortByPriceFilterProducts = (products, sortByPrice) => {
  switch (sortByPrice) {
    case "LOW_TO_HIGH":
      return [...products].sort(
        (itemOne, itemTwo) => itemOne.sellingPrice - itemTwo.sellingPrice
      );

    case "HIGH_TO_LOW":
      return [...products].sort(
        (itemOne, itemTwo) => itemTwo.sellingPrice - itemOne.sellingPrice
      );

    default:
      return products;
  }
};

