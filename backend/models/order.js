import mongoose from "mongoose";

const {ObjectId} = mongoose.Schema;

const ProductCartSchema = new mongoose.Schema({
    product: {
        type: ObjectId,
        ref: "Product"
    },
    name: String,
    count: Number,
    price: Number
})

const ProductCart = mongoose.model("ProductCart", ProductCartSchema)

const OrderSchema = new mongoose.Schema(
    {
        product: [ProductCartSchema],
        transaction_id: {},
        amount: {
            type: Number
        },
        address: String,
        updated: Date,
        user: {
            type: ObjectId,
            ref: " User"
        }
    },
    {timestamps: true}
);

const Order = mongoose.model("Order", OrderSchema)
export default {ProductCart, Order};