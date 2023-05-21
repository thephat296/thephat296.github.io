const express = require("express");
const app = express();
const session = require("express-session");

// Set up session middleware
app.use(
  session({
    secret: "secret-number-quiz",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Set up Pug as the view engine
app.set("view engine", "pug");
app.set("views", "./views");

const sequences = [
  { question: [3, 1, 4, 1, 5], answer: 9 },
  { question: [1, 1, 2, 3, 5], answer: 8 },
  { question: [1, 2, 4, 8, 16], answer: 32 },
  { question: [2, 3, 5, 7, 11], answer: 13 },
  { question: [0, 1, 1, 2, 3], answer: 5 },
];

// Middleware to check if the user is authenticated
const requireAuth = (req, res, next) => {
  if (req.session.authenticated) {
    next();
  } else {
    res.redirect("/login");
  }
};

app.get("/", (req, res) => {
  const quizNumber = req.session.quizNumber || 0;
  const score = req.session.score || 0;
  const sequence = sequences[quizNumber];

  res.render("numberquiz", {
    question: sequence.question.join(" "),
    score: score,
  });
});

app.post("/", (req, res) => {
  const answer = req.body.answer;
  const quizNumber = req.session.quizNumber || 0;
  const score = req.session.score || 0;
  const sequence = sequences[quizNumber];

  if (!answer) {
    res.redirect("/");
    return;
  }
  if (answer == sequence.answer) {
    req.session.score = score + 1;
  }
  req.session.quizNumber = quizNumber + 1;

  if (req.session.quizNumber < sequences.length) {
    res.redirect("/");
  } else {
    res.render("result", {
      score: req.session.score || 0,
      questionsLength: sequences.length,
    });
  }
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
