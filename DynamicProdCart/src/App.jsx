import React, { useState, useEffect } from "react";

function App() {

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 }
  ];

  const [cartCount, setCartCount] = useState(0);

  function addToCart() {
    setCartCount(cartCount + 1);
  }

  useEffect(() => {
    console.log("Cart updated. Items:", cartCount);
  }, [cartCount]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Product List</h2>

      <h3>Cart Items: {cartCount}</h3>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            padding: "10px",
            margin: "10px",
            width: "200px"
          }}
        >
          <h4>{product.name}</h4>
          <p>Price: ₹{product.price}</p>

          <button onClick={addToCart}>
            Add to Cart
          </button>

        </div>
      ))}
    </div>
  );
}

export default App;