import Product from "../models/product.js";
import formidable from "formidable";
import _ from "lodash";
import fs from "fs";

const getProductById = (req, res, next, id) => {
  Product.findById(id)
    .populate("category")
    .exec((err, product) => {
      if (err) {
        return res.status(400).json({
          error: "Product not Found",
        });
      }
      req.product = product;
      next();
    });
};

const createProduct = (req, res) => {
  let form = new formidable.IncomingForm();
  form.keepExtensions = true;

  form.parse(req, (err, fields, file) => {
    if (err) {
      return res.status(400).json({
        error: "Problem with image",
      });
    }

    // destructing the fields
    const { name, description, price, category, stock } = fields;

    if (!name || !description || !price || !category || !stock) {
      return res.status(400).json({
        error: "All fields are required!, Please fill All fields",
      });
    }

    // restriction on fields
    let product = new Product(fields);

    // handle file
    if (file.photo) {
      if (file.photo.size > 3000000) {
        return res.status(400).json({
          error: "File size too big",
        });
      }
      product.photo.data = fs.readFileSync(file.photo.filepath);
      product.photo.contentType = file.photo.type;
    }

    // save to the DB
    console.log(product);
    product.save((err, product) => {
      if (err) {
        return res.status(400).json({
          error: "Not able save product in DB",
        });
      }
      res.json(product);
    });
  });
};

export { getProductById, createProduct };
