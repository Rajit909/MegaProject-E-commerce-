import express  from "express"
const router = express.Router()

import {getUserById, getUser, updateUser, userPurchaseList, pushOrderInPurchageList} from "../Controller/user.js"
import {isSignedIn, isAuthenticated, isAdmin} from "../Controller/auth.js"


router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);
router.get("/orders/user/:userId", isSignedIn, isAuthenticated, userPurchaseList);
router.get("/orders/user/:userId", isSignedIn, isAuthenticated, pushOrderInPurchageList);

export default router;