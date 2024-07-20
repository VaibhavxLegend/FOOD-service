const express=require("express");

const router = express.Router()

const getdishes=require("../controllers/dishesController");

router.get("/dishes", getdishes);

module.exports=router;