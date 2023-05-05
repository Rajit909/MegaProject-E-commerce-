import express from "express";
const router = express.Router();

import { isSignedIn, isAuthenticated, isAdmin } from "../Controller/auth.js";
import { getUserById, pushOrderInPurchageList } from "../Controller/user.js";
import {updateStock} from "../Controller/product.js"

import{
    getOrderById
}
from "../Controller/order.js";

// params
router.param("userId", getUserById);
router.param("orderId", getOrderById);

export default router