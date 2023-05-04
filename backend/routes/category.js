import express from "express";
const router = express.Router();

import {
  getCategoryById,
  createCategory,
  getCategory,
  getAllCategory,
  updateCategory,
  deleteCategory
} from "../Controller/category.js";
import { isSignedIn, isAuthenticated, isAdmin } from "../Controller/auth.js";
import { getUserById } from "../Controller/user.js";

// params
router.param("userId", getUserById);
router.param("categoryId", getCategoryById);

// routes
// create
router.post(
  "/category/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createCategory
);

// read
router.get("/category/:categoryId", getCategory);
router.get("/categories", getAllCategory);

// update
router.put(
  "/category/:categoryId/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateCategory
);

// delete
router.delete(
    "/category/:categoryId/:userId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    deleteCategory
  );

export default router;
