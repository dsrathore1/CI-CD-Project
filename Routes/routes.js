import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../Controllers/mainController.js";
import productModel from "../Model/projectModel.js";

const routes = Router();

routes.get("/", async (req, res) => {
  const getData = await productModel.find({});
  res.render("home.ejs", {
    title: "Product Page",
    data: getData,
  });
});

routes.get("/api/products", getProduct);
routes.post("/api/products", createProduct);
routes.put("/api/updateProduct/:id", updateProduct);
routes.delete("/api/deleteOneProduct/:id", deleteProduct);

export default routes;
