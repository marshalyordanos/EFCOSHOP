import mongoose from "mongoose";
import dotenv from "dotenv";
import users from "./data/User.js";
import Products from "./data/Products.js";
import User from "./model/userModel.js";
import Product from "./model/productModel.js";
import Order from "./model/orderModel.js";
import products from "./data/Products.js";
import colors from "colors";
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

const importData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    const allUser = await User.insertMany(users);

    const adminUser = allUser[0]._id;
    const sampleProduct = products.map((product) => {
      return { ...product, user: adminUser };
    });

    await Product.insertMany(sampleProduct);
    console.log("data Imporded".green.inverse);
    process.exit();
  } catch (err) {
    console.log(` ${err}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await User.deleteMany();
    await Product.deleteMany();

    console.Console.log("data destroyed".green.inverse);
    process.exit();
  } catch (err) {
    console.log(` ${err}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] == "-d") {
  destroyData();
} else {
  importData();
}
