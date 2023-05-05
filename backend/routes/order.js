import express from "express";
const router = express.Router();

import { isSignedIn, isAuthenticated, isAdmin } from "../Controller/auth.js";
import { getUserById, pushOrderInPurchageList } from "../Controller/user.js";
import { updateStock } from "../Controller/product.js";

import {
  getOrderById,
  createOrder,
  getAllOrders,
  getOrderStatus,
  updateStatus,
} from "../Controller/order.js";

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
router.get(
  "/order/All/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getAllOrders
);

// status of order

router.get(
  "/order/:orderId/status/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  getOrderStatus
);
router.put(
  "/order/:orderId/status/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateStatus
);

export default router;
