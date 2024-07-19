const express = require("express");
const app = express();

const dishes=require("./routes/dishesRoutes");
const registerUser=require("./routes/userRoutes");

const port = 5000;

app.use(express.json());

app.use("/api",dishes);

app.use("/api", registerUser);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// 