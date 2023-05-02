import express from "express"
import { signout, home, signup, signin} from "../Controller/auth.js"
const router = express.Router()
import {check} from "express-validator"

router.post("/signup",[
    check("name", "Name should be at least 3 char").isLength({min: 3}),
    check("email", "Email is required").isEmail(),
    check("password", "Password should be at least 3 char").isLength({min: 3}),
], signup
);

router.post("/signin",[
    check("email", "Email is required").isEmail(),
    check("password", "Password is required").isLength({min: 3}),
], signin
);

router.get("/signout", signout)




router.get("/", home)

export default router