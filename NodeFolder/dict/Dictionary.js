const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const word = require("./word");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => word.getDefinitions(req, res));
app.listen(3000, () => console.log("Server listening on port 3000"));
