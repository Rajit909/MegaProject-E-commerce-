import express  from "express"
const router = express.Router()

import {getUserById, getUser} from "../Controller/user.js"
import {isSignedIn, isAuthenticated, isAdmin} from "../Controller/auth.js"

router.param("userId", getUserById);

router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);

export default router;