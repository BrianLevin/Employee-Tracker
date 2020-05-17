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

const questions = [{
    type: 'list', // This will display the list of licenses
    name: 'options',
    message: 'What would you like to do?',
    choices: ['add employee', 'add role', 'add department', 'view employee', 'view role', 'view department', 'update employee roles', 'None'], // the choices for the differant license types


}];

inquirer.prompt(questions).then(function (answers) {
    if (answers.options === 'add department') {
        addDepartment();
    } else if (answers.options === 'add employee') {
        addEmployee();
    } else if (answers.options === 'add role') {
        addRole();
    }

});

function addDepartment() {
    inquirer.prompt([{
        type: 'input',
        name: 'departmentName',
        message: 'what is the name of the department?'
    }]).then(function (answers) {
        console.log(answers);
        var query = connection.query(
            "INSERT INTO department SET ?",
            {
                name: answers.departmentName,

            },

            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " product inserted!\n");
                // Call updateProduct AFTER the INSERT completes

            }
        );
    })
}
function addEmployee() {
    inquirer.prompt([{
        type: 'input',
        name: 'employeeName',
        message: 'what is the name of the employee?'
    }]).then(function (answers) {
        console.log(answers);
        var query = connection.query(
            "INSERT INTO employee SET ?",
            {
                name: answers.employeeName,


            },
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " product inserted!\n");
                // Call updateProduct AFTER the INSERT completes

            }
        );
    })

}
function addRole() {
    inquirer.prompt([{
        type: 'input',
        name: 'employeeRole',
        message: 'what is the role of the employee?'
    }]).then(function (answers) {
        console.log(answers);
        var query = connection.query(
            "INSERT INTO employee SET ?",
            {
                name: answers.employeeRole,


            },
            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " product inserted!\n");
                // Call updateProduct AFTER the INSERT completes

            }
        );
    })

}
