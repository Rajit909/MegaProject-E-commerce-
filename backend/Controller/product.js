import Product from "../models/product.js"
import formidable from "formidable"

const getProductById = (req, res, next, id) => {
    Product.findById(id)
    .populate("category")
    .exec((err, product) => {
        if (err) {
            return res.status(400).json({
                error: "Product not Found"
            })
        }
        req.product = product;
        next();
    })
}

const createProduct = (req, res) => {

}

export {
    getProductById,
    createProduct
}