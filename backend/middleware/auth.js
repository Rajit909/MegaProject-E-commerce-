import jwt from "jsonwebtoken"

import dotenv from "dotenv";
dotenv.config();

const auth = (req, res, next) => {
    // console.log(req.cookies);

    const {token} = req.cookies
    // Authorization: "Bearer longtokenvalue"
    // const token = req.header("Authorization").replace("Bearer ", "")

    //what if token is not there
    if (!token) {
        return res.status(403).send('token is missing')
    }

    //verify token
    try {
        const decode = jwt.verify(token, process.env.SECRET_CODE)
        console.log(decode);
        req.user = decode

        
    } catch (error) {
        res.status(403).json({
            message: error.message,
            status:'token is invalid'
        })
    }
    return next()
}

export default auth;