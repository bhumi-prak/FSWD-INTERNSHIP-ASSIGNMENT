import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Filter from "./components/Filter";
import productsData from "./data/products";
import "./styles/styles.css";

function App() {
  const [cart, setCart] = useState([]);
  const [category, setCategory] = useState("All");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts =
    category === "All"
      ? productsData
      : productsData.filter((p) => p.category === category);

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <Filter setCategory={setCategory} />

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default App;