import "./Home.css";
import { Categories, HomeMain } from "../../components/components";

export function Home() {
  return (
    <main className="main">
      <Categories />
      <HomeMain />
    </main>
  );
}

