import express from "express";
const router = express.Router();

import { getProductById, createProduct } from "../Controller/product.js";
import { isSignedIn, isAuthenticated, isAdmin } from "../Controller/auth.js";
import { getUserById } from "../Controller/user.js";

// params
router.param("userId", getUserById);
router.param("productId", getProductById);

// router
router.post(
  "/product/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createProduct
);



export default router;