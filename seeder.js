const fs = require("fs");
const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");
const Category = require("./models/Category");
const Book = require("./models/Book");
const User = require("./models/User");

dotenv.config({ path: "./config/config.env" });

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const categories = JSON.parse(
  fs.readFileSync(__dirname + "/data/categories.json", "utf-8")
);

const books = JSON.parse(
  fs.readFileSync(__dirname + "/data/book.json", "utf-8")
);

const users = JSON.parse(
  fs.readFileSync(__dirname + "/data/user.json", "utf-8")
);

const importData = async () => {
  try {
    await Category.create(categories);
    await Book.create(books);
    await User.create(users);
    console.log("Өгөгдлийг импортлолоо....".green.inverse);
  } catch (err) {
    console.log(err);
  }
};

const deleteData = async () => {
  try {
    await Category.deleteMany();
    await Book.deleteMany();
    await User.deleteMany();
    console.log("Өгөгдлийг бүгдийг устгалаа....".red.inverse);
  } catch (err) {
    console.log(err.red.inverse);
  }
};

if (process.argv[2] == "-i") {
  importData();
} else if (process.argv[2] == "-d") {
  deleteData();
}
