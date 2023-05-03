import express  from "express"
const router = express.Router()


import { isAdmin, isAuthenticated, isSignedIn } from "../Controller/auth"
import { getUserById } from "../Controller/user"


router.param("userId", getUserById);


export default router
