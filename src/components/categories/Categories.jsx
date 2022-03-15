import "./Categories.css";
import axios from "axios";
import { useEffect } from "react";
import { useAPI } from "../../context/api-context";

export function Categories() {
  const { APIState, APIDispatch } = useAPI();
  const { data, error, loading } = APIState;

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/categories");
        APIDispatch({ type: "SUCCESS", payload: { data: response.data } });
      } catch (error) {
        APIDispatch({ type: "ERROR", payload: { error: error.message } });
      }
    })();
  }, []);

  const categories = data.categories;

  return (
    <section className="category-section">
      {loading ? (
        <p>Fetching categories for you...</p>
      ) : error !== "" ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : (
        categories.map((category) => (
          <div className="card card-vertical" key={category._id}>
            <div className="card-overlay-container card-opacity">
              <img
                className="card-img"
                src={category.imgUrl}
                alt={category.categoryName}
              />
              <div className="card-overlay-details">
                <h3 className="card-overlay-title">{category.categoryName}</h3>
              </div>
            </div>
          </div>
        ))
      )}
    </section>
  );
}

