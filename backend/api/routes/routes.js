// import express
import express from "express";

// import functions from controller
import {
  allProducts,
  showAProduct,
  createProduct,
} from "../controllers/products";
import router from "frontend/src/router";

//get all products
router.get("/products", allProducts);

//get single product
router.get("/products/:id", showAProduct);

//create a new product
router.get("/products", createProduct);

// export default router
export default router;
