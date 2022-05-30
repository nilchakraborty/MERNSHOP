import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Nilanjit Chakraborty",
    email: "chakrabortynilanjit@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Tom Cruise",
    email: "tom@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "John Wick",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
