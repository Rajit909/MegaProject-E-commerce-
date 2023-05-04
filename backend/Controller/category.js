import Category from "../models/category.js";

const getCategoryById = (req, res, next, id) => {
  Category.findById(id).exec((err, cate) => {
    if (err) {
      return res.status(400).json({
        error: "Category not Found in DB",
      });
    }
    req.category = cate;
    next();
  });
};

const createCategory = (req, res) => {
  const category = new Category(req.body);
  Category.save((err, category) => {
    if (err) {
      return res.status(400).json({
        error: "Not able to save category in DB",
      });
    }
    res.json({ category });
  });
};


const getCategory = (req, res) => {
    return res.json(res.category)
}

const getAllCategory = (req, res) => {
    Category.find().exec((err, categories) => {
      if (err) {
        return res.status(400).json({
          error: "Categories Not Found",
        });
      }
      res.json(categories)
    })
}

const updateCategory = (req, res) => {
  const category = req.category;
  category.name = req.body.name
  
  category.save((err, updatedCategory) => {
    if (err) {
      return res.status(400).json({
        error: "Not able to update Category",
      });
    }
    res.json(updateCategory)
  })
}


export { 
    getCategoryById,
    createCategory,
    getCategory,
    getAllCategory,
    updateCategory
};
