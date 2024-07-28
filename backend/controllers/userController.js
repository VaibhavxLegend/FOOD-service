const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/User");

const registerUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let password = req.body.password;
  const userpresent = await UserModel.findOne({ email: email });

  if (userpresent) return res.send("user already exists");
  //hash the password

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newuser = new UserModel({
    email: email,
    name: name,
    password: hashedPassword,
  });
  //save the user to the database
  const saveduser = newuser.save();

  //create a json web token
  const token = jwt.sign({ userId: saveduser._id }, "556677");

  console.log(req.body);
  return res.json({ user: newuser, token });
};

const loginUser = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  //find the user in the database
  let test = await UserModel.findOne({ email: email });
  if (test) {
    //compare the password
    console.log(test);
    const passtest = bcrypt.compare(password, test.password)
    if (passtest) {
        //create a json web token
        const token = jwt.sign({ userId: test._id }, "556677");
        return res.json({ token });
      } else return res.send("incorrect password ");
  } else {
    return res.send("email not found");
  }
};

module.exports = { registerUser, loginUser };
