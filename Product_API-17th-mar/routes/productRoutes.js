const express = require("express");
const router = express.Router();

// Sample Data
let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Phone", price: 20000 }
];


// GET all products
router.get("/", (req, res) => {
  res.json(products);
});


// POST new product
router.post("/", (req, res) => {
  const { name, price } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    price
  };

  products.push(newProduct);
  res.json({ message: "Product added", product: newProduct });
});


// PUT update product
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price } = req.body;

  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  product.name = name || product.name;
  product.price = price || product.price;

  res.json({ message: "Product updated", product });
});


// DELETE product
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  products = products.filter(p => p.id !== id);

  res.json({ message: "Product deleted" });
});

module.exports = router;