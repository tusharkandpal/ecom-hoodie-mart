import axios from "axios";

export const addToWishlist = async (product) => {
  try {
    const { data, status } = await axios({
      method: "post",
      url: "/api/user/wishlist",
      headers: { authorization: localStorage.getItem("encodedToken") },
      data: { product },
    });
    return { data, status };
  } catch (err) {
    alert("Something went wrong: Add To Wishlist Failed");
    console.error(err);
  }
};

