import MockMan from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Signup, ProductListing, Wishlist, Cart, PageNotFound } from "../pages/pages";
import { ProtectedRoute } from "./ProtectedRoute";

export function RouterWrapper() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/product-listing" element={<ProductListing />}></Route>
      <Route
        path="/wishlist"
        element={<ProtectedRoute ProtectedComponent={<Wishlist />} />}
      ></Route>
      <Route
        path="/cart"
        element={<ProtectedRoute ProtectedComponent={<Cart />} />}
      ></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/mockman" element={<MockMan />}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
  );
}

