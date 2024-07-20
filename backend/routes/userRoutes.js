const express=require("express");

const router = express.Router()

const registerUser=require("../controllers/userController");

router.post("/user/register", registerUser);

module.exports=router;