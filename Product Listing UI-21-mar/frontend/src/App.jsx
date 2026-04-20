import React, { useState } from "react";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";
import "./App.css";

const data = [
  {
    id: 1,
    name: "Phone",
    price: 20000,
    category: "Electronics",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 2,
    name: "Laptop",
    price: 50000,
    category: "Electronics",
    image: "https://via.placeholder.com/150"
  },
  {
    id: 3,
    name: "Shirt",
    price: 1000,
    category: "Clothing",
    image: "https://via.placeholder.com/150"
  }
];

function App() {
  const [category, setCategory] = useState("All");

  const filtered =
    category === "All"
      ? data
      : data.filter((p) => p.category === category);

  return (
    <div>
      <h1>Product Listing</h1>
      <Filter setCategory={setCategory} />
      <ProductList products={filtered} />
    </div>
  );
}

export default App;