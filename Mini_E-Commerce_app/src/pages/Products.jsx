import React from "react";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

function Products() {

  const products = getProducts();

  return (
    <div className="container">

      <h2>Products</h2>

      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </div>

    </div>
  );
}

export default Products;