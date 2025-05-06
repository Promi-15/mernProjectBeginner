import express from "express";

import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/productController.js";

const router = express.Router();

//mongo theke product antese
router.get("/", getProducts);

//create
router.post("/", createProduct);

//delete
router.delete("/:id", deleteProduct);

//update
router.put("/:id", updateProduct);
export default router;
