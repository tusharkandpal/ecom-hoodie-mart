import "./Home.css";
import { Nav, Categories, HomeMain } from "../../components/components";

export function Home() {
  return (
    <div>
      <Nav />
      <main className="main">
        <Categories />
        <HomeMain />
      </main>
    </div>
  );
}

