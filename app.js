import express from "express";
import { config } from "dotenv";
import cors from "cors";
import routes from "./Routes/routes.js";
import connectDB from "./DB/connectDB.js";

config();

const PORT = process.env.PORT || 4001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(routes);

app.set("views", "Templates");
app.set("view engine", "ejs")

app.listen(PORT, (req, res) => {
  connectDB();
  console.log(`Your site is live on http://localhost:${PORT}`);
});
