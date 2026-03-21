const ProductModel = require('../models/productModel');

exports.getAllProducts = (req, res) => {
  const products = ProductModel.getAllProducts();
  res.json(products);
};

exports.getProductById = (req, res, next) => {
  const product = ProductModel.getProductById(req.params.id);
  
  if (!product) {
    const err = new Error("Product not found");
    err.status = 404;
    return next(err);
  }

  res.json(product);
};

exports.addProduct = (req, res, next) => {
  const { id, name, price, category } = req.body;

  if (!id || !name || !price || !category) {
    const err = new Error("All fields are required");
    err.status = 400;
    return next(err);
  }

  const newProduct = ProductModel.addProduct({ id, name, price, category });
  res.status(201).json(newProduct);
};