//import functions from product model
const {
  getAllProducts,
  getProductByID,
  insertProduct,
} = require("../models/productModels");

//get all products
const allProducts = (req, res) => {
  getAllProducts((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// get single product
const showAProduct = (req, res) => {
  getProductByID(req.params.productID, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// create new product
const createProduct = (req, res) => {
  const data = req.body;
  insertProduct(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

module.exports = {
  allProducts,
  showAProduct,
  createProduct,
};
