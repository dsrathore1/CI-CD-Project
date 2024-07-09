import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "../Controllers/mainController.js";

const routes = Router();

routes.get("/", (req, res) => {
  res.render("home.ejs", {
    title: "Home Page",
  });
});

routes.get("/api/product", getProduct);
routes.post("/api/product", createProduct);
routes.put("/api/updateProduct/:id", updateProduct);
routes.delete("/api/deleteOneProduct/:id", deleteProduct);

export default routes;
