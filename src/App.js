import "./App.css";
import MockMan from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mockman" element={<MockMan />}></Route>
      </Routes>
    </div>
  );
}

export default App;
