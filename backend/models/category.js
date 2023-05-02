import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
            unique: true
        }
    },
    {timestamps: true}
)


const CategoryModel = mongoose.model("Category", categorySchema);
export default CategoryModel; 