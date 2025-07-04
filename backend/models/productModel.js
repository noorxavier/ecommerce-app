// filepath: c:\Users\User\OneDrive\Desktop\ecommerce-app\backend\models\productModel.js
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: Array, required: true },
  category: { type: String, required: true },
  subCategory: { type: String, required: true }, // Ensure the field name is correct
  sizes: { type: Array, required: true },
  bestseller: { type: Boolean },
  date: { type: Number, required: true }
});

const productModel = mongoose.models.Product || mongoose.model("Product", productSchema);

export default productModel;