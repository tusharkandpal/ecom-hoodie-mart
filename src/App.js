import "./App.css";
import { Nav } from "./components/components";
import { RouterWrapper } from "./router/RouterWrapper";

function App() {
  return (
    <div className="App">
      <Nav />
      <RouterWrapper />
    </div>
  );
}

export default App;
