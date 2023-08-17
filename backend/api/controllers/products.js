//import functions from product model
const {
  getAllProducts,
  getProductByID,
  insertProduct,
  deleteProduct,
  updateProduct,
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
// delete a product
const removeProduct = (req, res) => {
  const productId = req.params.productID;
  deleteProduct(productId, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json({ message: "Product deleted successfully" });
    }
  });
};

// update a product
const updateProductInfo = (req, res) => {
  const productId = req.params.productID;
  const newData = req.body;
  updateProduct(productId, newData, (err, results) => {
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
  removeProduct,
  updateProductInfo,
};
