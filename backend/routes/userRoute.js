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
import { signout, home, signup} from "../Controller/userController.js"
const router = express.Router()

router.post("/signup", signup)
router.get("/signout", signout)
router.get("/", home)

export default router