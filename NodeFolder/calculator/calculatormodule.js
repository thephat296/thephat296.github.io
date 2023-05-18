exports.calculate = (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const operation = req.query.operation;

  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num2 === 0 ? "Cannot devide a number by zero!" : num1 / num2;
      break;
    default:
      result = "Operation not found!";
      break;
  }

  res.render("result", {result: result});
};
