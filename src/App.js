import "./App.css";
import { Nav } from "./components/components";
import { RouterWrapper } from "./router/RouterWrapper";
import { useTheme } from "./context/context";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <Nav />
      <RouterWrapper />
    </div>
  );
}

export default App;
