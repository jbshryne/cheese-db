const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
app.use(morgan("tiny"));
app.use(express.urlencoded({ extended: true }));
const cheeseController = require('./controllers/cheeseController')

app.get("/", async (req, res) => {
  res.send("I wear the cheese... it does not wear me!");
});

app.use("/cheeses", cheeseController)

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log("Cheesin' on", PORT);
});
