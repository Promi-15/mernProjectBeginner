//express import
import express from "express";
//dotenv
import dotenv from "dotenv";

import productRoutes from "./routes/product.js";
import { connectDb } from "./config/db.js";
dotenv.config();
const PORT = process.env.PORT || 3000

//
const app = express(); // es6

app.use(express.json()); ///middle ware req.body te json data accept kore

app.use("/api/products", productRoutes);

//port e choltese
app.listen(PORT, () => {
  connectDb();
  console.log(`server is running at port ${PORT}` );
});
