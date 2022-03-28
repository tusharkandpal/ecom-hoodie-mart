import MockMan from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Home, Login, ProductListing, Wishlist } from "../pages/pages";
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
      <Route path="/login" element={<Login />}></Route>
      <Route path="/mockman" element={<MockMan />}></Route>
    </Routes>
  );
}

