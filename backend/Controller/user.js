import User from "../models/User.js";

const getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "No user find in DB"
            })
        }
        req.profile = user
        next();
    });
}

const getUser = (req, res) => {
    //get back here for password
    req.profile.salt = undefined;
    req.profile.encry_password = undefined
    return res.json(req.profile)
}

export  {getUserById, getUser}