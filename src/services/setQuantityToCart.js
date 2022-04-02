import axios from "axios";

export const setQuantityToCart = async (id, actionType) => {
  try {
    const { data, status } = await axios({
      method: "post",
      url: `/api/user/cart/${id}`,
      headers: { authorization: localStorage.getItem("encodedToken") },
      data: { action: { type: actionType } } 
    });
    return { data, status };
  } catch (err) {
    alert("Something went wrong: Remove From Wishlist Failed");
    console.error(err);
  }
};

