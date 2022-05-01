import express from "express";
import products from "./data/Products.js";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import colors from "colors";
import productRoute from "./routes/productRoute.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Db connection successful! ..........".cyan.underline);
  });

const app = express();

app.use(cors());
app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/products", productRoute);

app.use("*", (req, res, next) => {
  const error = new Error(`Not FOund - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

app.use((err, req, res, next) => {
  const statusCode = res.statusCode == 200 ? 500 : res.statusCode;
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? "null" : err.stack,
  });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(
    `Server is running in ${process.env.NODE_ENV} on port ${port} ..........`
  );
});
