import "./Categories.css";
import axios from "axios";
import { useEffect } from "react";
import { useCategory } from "../../context/context";
import { Link } from "react-router-dom";

export function Categories() {
  const { categoryState, categoryDispatch } = useCategory();
  const { categories, error, loading } = categoryState;

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("/api/categories");
        categoryDispatch({
          type: "SUCCESS",
          payload: { data: data.categories },
        });
      } catch (error) {
        categoryDispatch({ type: "ERROR", payload: { error: error.message } });
      }
    })();
  }, []);

  return (
    <section className="category-section">
      {loading ? (
        <h3>Fetching categories for you...</h3>
      ) : error !== "" ? (
        <p className="error-message">{error}</p>
      ) : (
        categories.map(({_id, imgUrl, categoryName}) => (
          <Link
            to={`/product-listing?categoryName=${categoryName}`}
            className="card card-vertical"
            key={_id}
          >
            <div className="card-overlay-container card-opacity">
              <img
                className="card-img"
                src={imgUrl}
                alt={categoryName}
              />
              <div className="card-overlay-details">
                <h3 className="card-overlay-title">{categoryName}</h3>
              </div>
            </div>
          </Link>
        ))
      )}
    </section>
  );
}

