import express from "express";
const router = express.Router();

import { getProductById, createProduct, getProduct, photo } from "../Controller/product.js";
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

router.get("/product/:productId", getProduct)
router.get("/product/photo/:productId", photo)

export default router;