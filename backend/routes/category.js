import express  from "express"
const router = express.Router()

import { getCategoryById , createCategory, getCategory, getAllCategory} from "../Controller/category.js"
import {isSignedIn, isAuthenticated, isAdmin} from "../Controller/auth.js"
import {getUserById} from "../Controller/user.js"


// params
router.param("userId", getUserById);
router.param("categoryId", getCategoryById)

// routes
router.post("/category/create/:userId",isSignedIn, isAuthenticated,isAdmin, createCategory)
router.get("/category/:categoryId", getCategory)
router.get("/categories", getAllCategory)


export default router
