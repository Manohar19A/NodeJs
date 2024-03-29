const Product = require("../models/productModel");
// const {findAll} = require('../models/productModel')
async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    console.log(products);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (err) {
    console.log(err);
  }
}
async function getProduct(req, res, id) {
  try {
    const product = await Product.findById(id)

    if (!product) {
      res.writeHead(404, {"Content-Type": "application/json"});
      res.end(JSON.stringify({ message: "Product Not Found" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(product));
    }
  } catch (err) {
    console.log(err);
  }
}
module.exports = {
  getProducts,
  getProduct,
};
