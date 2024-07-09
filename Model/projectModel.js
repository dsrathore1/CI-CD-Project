import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    id: {
      type: Number,
      require: true,
    },

    name: String,
    company: String,
  },
  { timestamps: true }
);

const productModel = mongoose.models || mongoose.model("Product", Schema);

export default productModel;
