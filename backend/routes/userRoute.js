// // Url Path
// import express from "express"
// import auth from "../middleware/auth.js"
// import { 
//     home,
//     register,
//     login,
//     dashboard
// } from "../Controller/userController.js"


// import {
//     createTodo,
//     getTodo,
//     getTodos,
//     editTodo,
//     deleteTodo,
//     searchTodo
// } from "../Controller/todoController.js"

// const router = express.Router();

// //api routes
// router.get("/",home)
// router.post("/register", register)
// router.post("/login", login)
// router.get("/dashboard",auth,dashboard)

// // todo api routes
// router.get("/",home)
// router.post("/createTodo",createTodo)
// router.get("/getTodo",getTodo)
// router.get("/getTodos",getTodos)
// router.put("/editTodo",editTodo)
// router.delete("/deleteTodo",deleteTodo)
// router.get("/searchTodo",searchTodo)

// export default router

import express from "express"
import { signout, home, signup, signin} from "../Controller/userController.js"
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