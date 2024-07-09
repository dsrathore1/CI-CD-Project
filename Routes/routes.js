import { Router } from "express";
import { createProduct, getProduct } from "../Controllers/mainController.js";

const routes = Router();

routes.get("/", (req, res) => {
  res.render("home.ejs", {
    title: "Home Page",
  });
});

routes.get("/api/getAll", getProduct);
routes.post("/api/createProduct", createProduct);
// routes.put("/api/updateProduct", updateProduct);
// routes.delete("/api/deleteOneProduct", deleteProduct);

export default routes;
