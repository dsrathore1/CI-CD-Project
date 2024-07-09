import mongoose from "mongoose";

const Schema = mongoose.Schema(
  {
    id: {
      type: Number,
      require: true,
      unique: true,
    },

    name: String,
    company: String,
  },
  { timestamps: true }
);

const productModel =
  mongoose.models.Products || new mongoose.model("Product", Schema);

export default productModel;
