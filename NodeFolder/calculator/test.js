const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.listen(3000, () => {
  console.log("Your Server is running on 3000");
});

app.use((req, res, next) => {
  console.log("This is always run");
  next();
});
// app.use("/add-product", (req, res, next) => {
//   console.log("In the middleware!");
//   res.send('<h1>The "Add Product" Page</h1>');
// });ß

const jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.post("/login", urlencodedParser, function (req, res) {
  console.log("This is login");
  res.send("welcome, " + req.body.username);
});
app.post("/api/users", jsonParser, function (req, res) {
  // create user in req.body
});

app.use(bodyParser.urlencoded({ extended: false }));
app.get("/add-product", (req, res, next) => {
  console.log("In the middleware!");
  res.send(
    '<form action="/product" method="post"><input name="title"><button type="submit">Submit</button></form>'
  );
});
app.post("/product", (req, res, next) => {
  console.log(req.body); // { title: 'book' }
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  console.log("In another middleware!");
  res.send("<h1>Hello from Express</h1>");
});
