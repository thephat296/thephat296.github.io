const express = require("express");
const app = express();
const calculatorMod = require("./calculatormodule.js");

// Set up the route for the home page
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/calculator.html");
});

app.get("/calculate", calculatorMod.calculate);

app.listen(3000, () => {
  console.log("Calculator server is running on 3000");
});
