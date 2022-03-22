import { useState } from "react";
import "./Sidebar.css";

export function Sidebar() {
  const [sidebarToggle, setSidebarToggle] = useState("");

  const sidebarHandler = () => {
    sidebarToggle === "" ? setSidebarToggle("sidebar-toggle") : setSidebarToggle("");
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
            <span className="list-filter-clear">Clear</span>
          </li>
          <li className="sidebar-list-item">
            <span className="list-filter-header">Price</span>
            <div className="list-filter-item">
              <label className="item-label">
                <input type="radio" name="price" className="item-input" />
                Less than ₹1000
              </label>
              <label className="item-label">
                <input type="radio" name="price" className="item-input" />
                ₹1000 - ₹2000
              </label>
              <label className="item-label">
                <input type="radio" name="price" className="item-input" />
                More than ₹2000
              </label>
            </div>
          </li>
          <li className="sidebar-list-item">
            <span className="list-filter-header">Category</span>
            <div className="list-filter-item">
              <label className="item-label">
                <input type="checkbox" name="category" className="item-input" />
                Men Clothing
              </label>
              <label className="item-label">
                <input type="checkbox" name="category" className="item-input" />
                Women Clothing
              </label>
              <label className="item-label">
                <input type="checkbox" name="category" className="item-input" />
                Boys Clothing
              </label>
              <label className="item-label">
                <input type="checkbox" name="category" className="item-input" />
                Girls Clothing
              </label>
              <label className="item-label">
                <input type="checkbox" name="category" className="item-input" />
                Kids Clothing
              </label>
            </div>
          </li>
          <li className="sidebar-list-item">
            <span className="list-filter-header">Sort by</span>
            <div className="list-filter-item">
              <label className="item-label">
                <input type="radio" name="sort-by" className="item-input" />
                Price - Low to High
              </label>
              <label className="item-label">
                <input type="radio" name="sort-by" className="item-input" />
                Price - High to Low
              </label>
            </div>
          </li>
        </ul>
      </aside>
    </>
  );
}
