import express from "express";
const router = express.Router();

import {
    getProductById
} from "../Controller/product.js"
import { isSignedIn, isAuthenticated, isAdmin } from "../Controller/auth.js";
import { getUserById } from "../Controller/user.js";


// params
router.param("userId", getUserById);
router.param("productId", getProductById);



export default router