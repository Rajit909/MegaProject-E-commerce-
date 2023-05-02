import dotenv from "dotenv"
dotenv.config()
import express from "express"
import connectToDB from "./config/database.js"
import router from "./routes/userRoute.js"
import cookieParser from 'cookie-parser'
import cors from "cors"
import bodyParser from "body-parser"
const app = express()

//Middleware
app.use(bodyParser.json())
// app.use(express.urlencoded({extended: true}));
app.use(cookieParser())
app.use(cors())


connectToDB();

app.use("/api",router)

export default app;