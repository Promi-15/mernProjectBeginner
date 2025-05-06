//express import
import express from "express";
//dotenv
import dotenv from "dotenv";

import productRoutes from "./routes/product.js";
import { connectDb } from "./config/db.js";
dotenv.config();
//
const app = express(); // es6

app.use(express.json()); ///middle ware req.body te json data accept kore

app.use("/api/products", productRoutes);

//port e choltese
app.listen(3000, () => {
  connectDb();
  console.log("server is running at port 3000");
});
