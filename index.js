const inquirer = require('inquirer');

const mysql = require("mysql");

const connection = mysql.createConnection({
    host: "127.0.0.1",

    user: "Brian",

    password: "Password123",

    database: "employees_db"
});

connection.connect(function (err) {
    if (err) {
        throw err;
    }
})