let products = require("../models/productModel");

// GET all products
exports.getProducts = (req, res) => {
  res.json(products);
};

// GET product by ID
exports.getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  res.json(product);
};

// ADD product
exports.addProduct = (req, res) => {
  const { name, price, category } = req.body;

  if (!name || !price || !category) {
    return res.status(400).json({ message: "All fields required" });
  }

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    category
  };

  products.push(newProduct);
  res.json({ message: "Product added", product: newProduct });
};