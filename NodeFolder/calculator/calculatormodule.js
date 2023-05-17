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
      if (num2 === 0) {
        res.send("Cannot devide a number by zero!");
        return;
      }
      result = num1 / num2;
      break;
    default:
      res.send("Operation not found!");
      return;
  }

  res.send(`The Answer is: ${result}`);
};
