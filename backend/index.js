const express = require("express");
const app = express();

const dishes=require("./routes/dishesRoutes");
const registerUser=require("./routes/userRoutes");
const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/Food_app')
.then(()=> console.log("connected"))
const port = 5000;

app.use(express.json());


app.use((req,res,next)=>{
  console.log("time :",Date.now());
  next();
})


app.use("/api",dishes);
app.use("/api", registerUser);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})  