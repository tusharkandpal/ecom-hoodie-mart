import axios from "axios";

export const removeFromWishlist = async (id) => {
  try {
    const { data, status } = await axios({
      method: "delete",
      url: `/api/user/wishlist/${id}`,
      headers: { authorization: localStorage.getItem("encodedToken") }
    });
    return { data, status };
  } catch (err) {
    alert("Something went wrong: Remove From Wishlist Failed");
    console.error(err);
  }
};

