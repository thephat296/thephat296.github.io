const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Aa123456",
  database: "entries",
});

connection.connect();

exports.getDefinitions = (req, res) => {
  let { word } = req.query;
  const query = `SELECT * FROM entries WHERE word like '${word}'`;
  connection.query(query, function (error, result) {
    if (error) {
      res.send("Internal Server Error");
    } else {
      let results = JSON.stringify(result);
      res.send(results);
    }
    res.end();
  });
};
