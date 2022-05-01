import express from "express";
import Product from "../model/productModel.js";
import asynHandler from "express-async-handler";

const router = express.Router();

router.get(
  "/",
  asynHandler(async (req, res) => {
    const products = await Product.find();

    res.json(products);
  })
);

router.get(
  "/:id",
  asynHandler(async (req, res) => {
    console.log("data".red, req.params);
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(404).json({ massage: "Product not found" });
    }
    res.json({
      product,
    });
  })
);

export default router;
