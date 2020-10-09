const mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
  console.log("JAWS DB connected!");
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  console.log("LOCAL CONNECTION");
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3306",
    password: "Pass2020",
    database: "burgers_db",
  });
}

connection.connect();

module.exports = connection;
