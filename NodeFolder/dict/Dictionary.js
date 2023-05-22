const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const word = require("./word");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/lookup", function (req, res) {
  var wordToLookup = req.body.word;
  word.getDefinitions(wordToLookup, function (err, definitions) {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    } else {
      res.json(definitions);
    }
  });
});

app.listen(3000, function () {
  console.log("Server listening on port 3000");
});
