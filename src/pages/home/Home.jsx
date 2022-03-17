import "./Home.css";
import { Nav, Categories } from "../../components/components";

export function Home() {
  return (
    <div>
      <Nav />
      <main className="main">
        <Categories />
      </main>
    </div>
  );
}

