import dotenv from "dotenv"
dotenv.config()
import express from "express"
import connectToDB from "./config/database.js"
import cookieParser from 'cookie-parser'
import cors from "cors"
import bodyParser from "body-parser"
const app = express()

// my routes import
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/user.js"

//Middleware
app.use(bodyParser.json())
// app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
app.use(cors())


connectToDB();

// my routes
app.use("/api",authRoutes)
app.use("/api",userRoutes)

export default app;