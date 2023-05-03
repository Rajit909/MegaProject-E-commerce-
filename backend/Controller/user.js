import User from "../models/User.js";
import Order from "../models/order.js";

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

const userPurchaseList = (req, res) => {
    Order.find({user: profile._id})
    .populate("user", "_id name")
    .exec((err, order) => {
        if(err){
            return res.status(400).json({
                error: "No Order found"
            })
        }
        return res.json(order)
    })
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

const pushOrderInPurchageList = (req, res, next) => {
    let purchases = []
    req.body.order.products.forEach(product => {
        purchases.push({
            _id: product._id,
            name: product.name,
            description: product.description,
            category: product.category,
            quantity: product.quantity,
            amount: req.body.order.amount,
            transaction_id: req.body.order.transaction_id
        })
    });

    // store this in DB
    User.findOneAndUpdate(
        {_id: req.profile._id},
        {$push: {purchases: purchases}},
        {new: true},
        (err, purchases) => {
            if (err) {
                return res.status(400).json({
                    error: "!Unable to save purchase list."
                })
            }
        }
    )
    
    next()
}

export  {getUserById, getUser, updateUser, userPurchaseList, pushOrderInPurchageList}