const DishesModel = require("../models/Dishes");

const getdishes = async (req, res) => {
  const dishes = await DishesModel.find({});
  console.log(dishes);
  res.send(dishes);
};

module.exports=(getdishes);