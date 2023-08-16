// import express
const express = require("express");
const router = express.Router();
// import functions from controller
const {
  allProducts,
  showAProduct,
  createProduct,
} = require("../controllers/products")

//get all products
router.get("/products", allProducts);

//get single product
router.get("/products/:productID", showAProduct);

//create a new product
router.get("/products", createProduct);

// export default router
module.exports = router;
