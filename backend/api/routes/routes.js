// import express
const express = require("express");
const router = express.Router();
// import functions from controller
const {
  allProducts,
  showAProduct,
  createProduct,
  removeProduct,
  updateProductInfo
} = require("../controllers/products")

//get all products
router.get("/products", allProducts);

//get single product
router.get("/products/:productID", showAProduct);

//create a new product
router.post("/products", createProduct);

// Delete a product
router.delete("/products/delete/:productID", removeProduct);

// Update a product
router.put("/products/update/:productID", updateProductInfo);

// export default router
module.exports = router;
