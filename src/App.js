import "./App.css";
import MockMan from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Home, Login, ProductListing, Wishlist } from "./pages/pages";
import { Nav } from "./components/shared/Nav.jsx";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product-listing" element={<ProductListing />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/mockman" element={<MockMan />}></Route>
      </Routes>
    </div>
  );
}

export default App;
