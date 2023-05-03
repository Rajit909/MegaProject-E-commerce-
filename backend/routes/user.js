import express  from "express"
const router = express.Router()

import {getUserById, getUser, updateUser} from "../Controller/user.js"
import {isSignedIn, isAuthenticated, isAdmin} from "../Controller/auth.js"


router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser)

export default router;