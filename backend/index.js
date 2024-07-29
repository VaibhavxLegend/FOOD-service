const express = require("express");
const app = express();
const cors = require("cors");

const dishes=require("./routes/dishesRoutes");
const registerUser=require("./routes/userRoutes");
const mongoose=require('mongoose');

app.use(cors());

mongoose.connect('mongodb+srv://vaibhav2019jain:Rb13OFDBi26eYC4t@cluster0.v3gq07k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
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



// Rb13OFDBi26eYC4t