import "./Home.css";
import { Categories, HomeMain } from "../../components/components";
import { useTheme } from "../../context/context";

export function Home() {
  const { theme } = useTheme();
  
  return (
    <main className={`main ${theme}`}>
      <Categories />
      <HomeMain />
    </main>
  );
}

