import express from "express";
const router = express.Router();

import {
  getProductById,
  createProduct,
  getProduct,
  photo,
  deleteProduct,
  updateProduct,
  getAllProducts
} from "../Controller/product.js";

import { isSignedIn, isAuthenticated, isAdmin } from "../Controller/auth.js";
import { getUserById } from "../Controller/user.js";

// params
router.param("userId", getUserById);
router.param("productId", getProductById);

// router

// create
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);

// read
router.get("/product/:productId", getProduct);
router.get("/product/photo/:productId", photo);


// delete
router.delete(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  deleteProduct
);

// update
router.put(
  "/product/:productId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateProduct
);

// listing  route
router.get("/products", getAllProducts)


export default router;
