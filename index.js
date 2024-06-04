import express from "express";
import db from "./config/Database.js";
import Users from "./models/UserModel.js";
import router from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

try {
  await db.authenticate();
  console.log("Database Connect");
  await Users.sync(); //generate tabel  users otomatis
} catch (error) {
  console.error(error);
}
app.use(express.json());
app.use(router); //middleware
app.listen(5000, () => console.log("Server running at port 5000"));
