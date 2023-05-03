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

const updateUser = (req, res) => {
    User.findByIdAndUpdate(
        {_id: req.profile._id},
        {$set: req.body},
        {new: true, useFindAndModify: false},
        (err, user) => {
            if(err){
                return res.status(400).json({
                    error: "You are not Authorized to Update this user"
                })
            }
            user.salt = undefined;
            user.encry_password = undefined
            res.json(user)
        }
    )
}


// const getAllUsers = (req, res) => {
//     const { email} = req.body;

//     User.find().exec((err, users) => {
//         if (err || !users) {
//             return res.status(400).json({
//                 error: "No user found"
//             })
//         }
//         res.json(users)
//     })
// }


export  {getUserById, getUser, updateUser}