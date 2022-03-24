import { useState } from "react";
import "./Sidebar.css";
import { useProduct } from "../../context/context";

export function Sidebar() {
  const [sidebarToggle, setSidebarToggle] = useState("");
  const { productState, productDispatch } = useProduct();
  const { sortByPrice, categories, priceRange, rating } = productState.filters;

  const sidebarHandler = () => {
    sidebarToggle === ""
      ? setSidebarToggle("sidebar-toggle")
      : setSidebarToggle("");
  };

  return (
    <>
      <div className="sidebar-drawer" onClick={sidebarHandler}>
        <i className="fa-solid fa-filter"></i> Filters
      </div>
      <aside className={`products-sidebar ${sidebarToggle}`}>
        {/* || SIDEBAR LIST  */}
        <ul className="sidebar-list">
          <li className="sidebar-list-item">
            <span className="list-filter-header">Filters</span>
            <span
              className="list-filter-clear"
              onClick={() =>
                productDispatch({
                  type: "CLEAR_ALL",
                })
              }
            >
              Clear
            </span>
          </li>
          <li className="sidebar-list-item">
            <span className="list-filter-header">Price</span>
            <div className="list-filter-item">
              <input
                type="range"
                min="0"
                max="4000"
                className="slider"
                list="tickmarks"
                value={priceRange}
                onChange={(e) =>
                  productDispatch({
                    type: "PRICE_RANGE",
                    payload: { price: Number(e.target.value) },
                  })
                }
              />
              <datalist id="tickmarks" className="slider-list">
                <option value="0" label="0"></option>
                <option value="500"></option>
                <option value="1000"></option>
                <option value="1500"></option>
                <option value="2000" label="₹2k"></option>
                <option value="2500"></option>
                <option value="3000"></option>
                <option value="3500"></option>
                <option value="4000" label="₹4k"></option>
              </datalist>
            </div>
          </li>
          <li className="sidebar-list-item">
            <span className="list-filter-header">Category</span>
            <div className="list-filter-item">
              <label className="item-label">
                <input
                  type="checkbox"
                  name="category"
                  className="item-input"
                  onChange={() =>
                    productDispatch({
                      type: "CATEGORY",
                      payload: { category: "Men" },
                    })
                  }
                  checked={categories.includes("Men")}
                />
                Men Clothing
              </label>
              <label className="item-label">
                <input
                  type="checkbox"
                  name="category"
                  className="item-input"
                  onChange={() =>
                    productDispatch({
                      type: "CATEGORY",
                      payload: { category: "Women" },
                    })
                  }
                  checked={categories.includes("Women")}
                />
                Women Clothing
              </label>
              <label className="item-label">
                <input
                  type="checkbox"
                  name="category"
                  className="item-input"
                  onChange={() =>
                    productDispatch({
                      type: "CATEGORY",
                      payload: { category: "Boys" },
                    })
                  }
                  checked={categories.includes("Boys")}
                />
                Boys Clothing
              </label>
              <label className="item-label">
                <input
                  type="checkbox"
                  name="category"
                  className="item-input"
                  onChange={() =>
                    productDispatch({
                      type: "CATEGORY",
                      payload: { category: "Girls" },
                    })
                  }
                  checked={categories.includes("Girls")}
                />
                Girls Clothing
              </label>
              <label className="item-label">
                <input
                  type="checkbox"
                  name="category"
                  className="item-input"
                  onChange={() =>
                    productDispatch({
                      type: "CATEGORY",
                      payload: { category: "Kids" },
                    })
                  }
                  checked={categories.includes("Kids")}
                />
                Kids Clothing
              </label>
            </div>
          </li>
          <li className="sidebar-list-item">
            <span className="list-filter-header">Rating</span>
            <div className="list-filter-item">
              <label className="item-label">
                <input
                  type="radio"
                  name="rating"
                  className="item-input"
                  onChange={() =>
                    productDispatch({
                      type: "RATING",
                      payload: { rating: 4 },
                    })
                  }
                  checked={rating === 4}
                />
                4 stars & above
              </label>
              <label className="item-label">
                <input
                  type="radio"
                  name="rating"
                  className="item-input"
                  onChange={() =>
                    productDispatch({
                      type: "RATING",
                      payload: { rating: 3 },
                    })
                  }
                  checked={rating === 3}
                />
                3 stars & above
              </label>
              <label className="item-label">
                <input
                  type="radio"
                  name="rating"
                  className="item-input"
                  onChange={() =>
                    productDispatch({
                      type: "RATING",
                      payload: { rating: 2 },
                    })
                  }
                  checked={rating === 2}
                />
                2 stars & above
              </label>
              <label className="item-label">
                <input
                  type="radio"
                  name="rating"
                  className="item-input"
                  onChange={() =>
                    productDispatch({
                      type: "RATING",
                      payload: { rating: 1 },
                    })
                  }
                  checked={rating === 1}
                />
                1 star & above
              </label>
            </div>
          </li>
          <li className="sidebar-list-item">
            <span className="list-filter-header">Sort by</span>
            <div className="list-filter-item">
              <label className="item-label">
                <input
                  type="radio"
                  name="sort-by"
                  className="item-input"
                  onChange={() =>
                    productDispatch({
                      type: "SORT_BY_PRICE",
                      payload: { sort: "LOW_TO_HIGH" },
                    })
                  }
                  checked={sortByPrice === "LOW_TO_HIGH"}
                />
                Price - Low to High
              </label>
              <label className="item-label">
                <input
                  type="radio"
                  name="sort-by"
                  className="item-input"
                  onChange={() =>
                    productDispatch({
                      type: "SORT_BY_PRICE",
                      payload: { sort: "HIGH_TO_LOW" },
                    })
                  }
                  checked={sortByPrice === "HIGH_TO_LOW"}
                />
                Price - High to Low
              </label>
            </div>
          </li>
        </ul>
      </aside>
    </>
  );
}

