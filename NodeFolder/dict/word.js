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
  connection.query(query, (error, result) => {
    if (error) {
      res.send("Internal Server Error");
    } else {
      res.send(JSON.stringify(result));
    }
    res.end();
  });
};
