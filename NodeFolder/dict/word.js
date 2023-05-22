const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Aa123456",
  database: "entries"
});

connection.connect();

function getDefinitions(word, callback) {
  const query = "SELECT definition FROM Dictionary WHERE word = ?";
  connection.query(query, [word], function (error, results, fields) {
    if (error) {
      callback(error, null);
    } else {
      const definitions = results.map((result) => result.definition);
      callback(null, definitions);
    }
  });
}

module.exports = {
  getDefinitions: getDefinitions,
};
