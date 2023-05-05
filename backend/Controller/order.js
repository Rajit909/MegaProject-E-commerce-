import orderModel from "../models/order.js";

const {Order, ProductCart} = orderModel;

const getOrderById = (req, res, next, id) => {
    Order.findById(id)
    .populate("products.product", "name price")
    .exec((err, order) => {
        if(err){
            return res.status(400).json({
                error: 'No Order found in DB'
            })
        }
        req.order = order
        next();
    })
};


const createOrder = (req, res) => {
    req.body.order = req.profile
    const order = new Order(req.body.order)
    order.save((err, order) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to save order in DB"
            })
        }
        res.json(order)
    })
}

export {
  getOrderById,
  createOrder
};
