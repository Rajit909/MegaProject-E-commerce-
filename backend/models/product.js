import mongoose from "mongoose";

const {ObjectId} = mongoose.Schema;

const productSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
        },
        description: {
            type: String,
            trim: true,
            required: true,
            maxlength: 2000,
        },
        price: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32,
        },
        category: {
            type: ObjectId,
            ref: "Category",
            required: true,
            // trim: true,
            // maxlength: 32,
        },
        stock: {
            type: Number,

        },
        sold: {
            type: Number,
            default: 0
        },
        photo: {
            data: Buffer,
            contentType: String
        }
    },
    {timestamps: true}
);

const ProductModel = mongoose.model("Product", productSchema);
export default ProductModel;