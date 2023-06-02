import mongoose from "mongoose";

delete mongoose.connection.models["Product"];

const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: String,
});

export const Product = mongoose.model("Product", ProductSchema);
