import dotenv from "dotenv"
dotenv.config()
import express from "express"
import connectToDB from "./config/database.js"
import router from "./routes/userRoute.js"
import cookieParser from 'cookie-parser'
import cors from "cors"
const app = express()

//Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())


connectToDB();

app.use("/api",router)

export default app;