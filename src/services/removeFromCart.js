import axios from "axios";

export const removeFromCart = async (id) => {
  try {
    const { data, status } = await axios({
      method: "delete",
      url: `/api/user/cart/${id}`,
      headers: { authorization: localStorage.getItem("encodedToken") }
    });
    return { data, status };
  } catch (err) {
    alert("Something went wrong: Remove From Wishlist Failed");
    console.error(err);
  }
};

