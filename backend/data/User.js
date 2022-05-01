import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
    isAdmin: true,
  },
  {
    name: "kira",
    email: "kira@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
  },
  {
    name: "mame",
    email: "mame@gmail.com",
    password: bcrypt.hashSync("12345678", 10),
  },
];

export default users;
