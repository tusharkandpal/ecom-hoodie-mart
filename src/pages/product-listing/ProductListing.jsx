import "./ProductListing.css";
import { Sidebar, ProductCard } from "../../components/components";
import { useProduct } from "../../context/context";
import { useFilteredProducts } from "../../custom-hooks/custom-hooks";

export function ProductListing() {
  const { productState } = useProduct();
  const { products, error, loading } = productState;

  const filteredProducts = useFilteredProducts([...products]);

  return (
    <main className="products-main">
      <Sidebar />
      {/* || PRODUCTS SECTION */}
      <section className="products-section">
        <div className="products-section-header">
          <h3 className="products-sub-header">Showing All Products</h3>
          <span> (Showing {filteredProducts.length} products)</span>
        </div>
        {/* || PRODUCTS LAYOUT  */}
        <article className="products-layout">
          {loading ? (
            <h3>Fetching products for you...</h3>
          ) : error !== "" ? (
            <p className="error-message">{error}</p>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard {...product} key={product._id} />
            ))
          )}
        </article>
      </section>
    </main>
  );
}


