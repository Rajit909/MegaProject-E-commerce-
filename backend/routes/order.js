import express from "express";
const router = express.Router();

import { isSignedIn, isAuthenticated, isAdmin } from "../Controller/auth.js";
import { getUserById, pushOrderInPurchageList } from "../Controller/user.js";
import { updateStock } from "../Controller/product.js";

import { getOrderById, createOrder } from "../Controller/order.js";

// params
router.param("userId", getUserById);
router.param("orderId", getOrderById);

// actual
// create
router.post(
  "/order/create/:userId",
  isSignedIn,
  isAuthenticated,
  pushOrderInPurchageList,
  updateStock,
  createOrder
);
// read

export default router;
