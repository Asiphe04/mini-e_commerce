// import express
const express = require("express");
const router = express.Router();
// import functions from controller
const {
  allProducts,
  showAProduct,
  createProduct,
  removeProduct,
  updateProductInfo,
} = require("../controllers/products");

//get all products
router.get("/products", allProducts);

//get single product
router.get("/products/:id", showAProduct);

//create a new product
router.post("/products", createProduct);

// Delete a product
router.delete("/products/:id", removeProduct);

// Update a product
router.put("/products/:id", updateProductInfo);

// export default router
module.exports = router;
