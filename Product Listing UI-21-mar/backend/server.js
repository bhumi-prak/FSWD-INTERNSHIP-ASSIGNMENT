const express = require("express");
const app = express();

app.use(express.json());

let products = [
  { id: 1, name: "Phone", price: 20000, category: "Electronics" },
  { id: 2, name: "Shirt", price: 1000, category: "Clothing" }
];

// GET all products
app.get("/products", (req, res) => {
  res.json(products);
});

// POST product
app.post("/products", (req, res) => {
  const newProduct = {
    id: products.length + 1,
    ...req.body
  };
  products.push(newProduct);
  res.json(newProduct);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});