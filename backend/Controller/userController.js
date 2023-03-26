import User from "../model/users/User.js"

import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

const home = (req, res)=>{
    res.send("<h1>This is home page</h1>")
}

    //check if email is in correct format
    // if (!email.match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/) || email == "") {
    //     res.status(401).send("Please enter a email")
    // }

const register = async (req,res) => {
    try {

        //collect all information

        const {firstname, lastname, email, password } = req.body
        //validate the data, if exists
        if (!(firstname && lastname && email && password)) {
            throw new Error("All fields are Required.");
        }

        //check if email is in correct format
        //check if user exists or not
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            throw new Error("User already exists");
        }

        //encrypt the password
        const myEncyPassword = await bcrypt.hash(password, 10)

        let tasks = [];
        tasks[0] = "How";
        tasks[1] = "Are";
        tasks[2] = "You ?";


        //create a new entry in database
        const user = await User.create({
            firstname,
            lastname,
            email,
            password: myEncyPassword,
            todos: [{ uuid: uuidv4(), title: `Hello ${firstname}`, tasks}]
        })
        
        await user.save()

        //create a token and send it to user

        const token = jwt.sign({
            id: user._id, email
        },
        process.env.SECRET_CODE
        ,{expiresIn: process.env.EXPIRY_TIME })
        

        //don't want to send the password
        user.password = undefined
        user.token = token
        
        res.status(201).json({
            success: true,
            user,
        })


    } catch (error) {
        res.status(400).json({
            success:false,
            message:error.message,
        })
    }
}


const login = async (req, res) => {
    try {
        // Collect info from frontend
        const {email, password} = req.body

        // validate
        if (!(email && password)) {
            res.status(401).send("Email and password required")
        }

        // check user in DataBase
        const user = await User.findOne({email})

        if (! email) {
            res.status(401).send("User or email not found plese create a account")
        }

        // match the password
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign({id: user._id, email}, process.env.SECRET_CODE ,{expiresIn: process.env.EXPIRY_TIME})
        
            user.password = undefined
            user.token = token

            const option = {
                expires: new Date(Date.now() + 3 * 24 * 60 * 1000),
                httpOnly: true
            }

            res.status(200).cookie("token", token, option).json({
                success: true,
                token,
                user
            })        
        }else{
            throw new Error("Invalid credential")
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

const dashboard = async (req, res) =>{
    const {token} = req.cookies;

    if (!token) {
        res.status(500).json({
            message: "Token not found"
        })
    }
    
    try {
        let decode = jwt.verify(token, process.env.SECRET_CODE)

        res.status(200).json({
            message: "Welcome to TODO APP"
        })
    } catch (error) {
        res.status(500).json({
            message: "Invalid token"
        })
    }
};

export { home, register, login, dashboard} ;