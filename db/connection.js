const util = require("util");
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "127.0.0.1:3306",
  // Your username
  user: "root",
  // Your password
  password: "Password123",
  database: "employees"
});

connection.connect();

// Setting up connection.query to use promises instead of callbacks
// This allows us to use the async/await syntax
connection.query = util.promisify(connection.query);

module.exports = connection;