let products = require('../data/products');

class ProductModel {
  static getAllProducts() {
    return products;
  }

  static getProductById(id) {
    return products.find(p => p.id == id);
  }

  static addProduct(product) {
    products.push(product);
    return product;
  }
}

module.exports = ProductModel;