import Product from "../models/product.js"

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

export {
    getProductById,
}