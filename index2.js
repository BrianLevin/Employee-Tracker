/*
const inquirer = require('inquirer'); // inquirer library to run the prompts

const mysql = require("mysql"); // my sql library to run  mysql 

const connection = mysql.createConnection({ // the connecttion which connect to mysql
    host: "127.0.0.1",

    user: "Brian",

    password: "Password123",

    database: "employees_db"
});

connection.connect(function (err) { // error if it doesnt work
    if (err) {
        throw err;
    }
})

const questions = [{ // list the user what they would like to add
    type: 'list',
    name: 'options',
    message: 'What would you like to do?',
    choices: ['add employee', 'add role', 'add department', 'view employee', 'view role', 'view department', 'update employee roles', 'None'], // the choices for the differant license types


}];

inquirer.prompt(questions).then(function (answers) { //if else statements for the choices that the user picked in the command line
    if (answers.options === 'add department') {
        addDepartment();
    } else if (answers.options === 'add employee') {
        addEmployee();
    } else if (answers.options === 'add role') {
        addRole();
    }

});

function addDepartment() { // function whcih will add department
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
                console.log(res.affectedRows + " product inserted!\n"); // the department will be inserted
                // Call updateProduct AFTER the INSERT completes

            }
        );
    })
}
function addEmployee() { // function which will add employee
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
                console.log(res.affectedRows + " product inserted!\n"); // the new employee will be inserted


            }
        );
    })

}
function addRole() { // function which will add the role
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
                console.log(res.affectedRows + " product inserted!\n"); // new role will be inserted


            }
        );
    })

}

function updateEmployeeRole() { //function which will update the employeeRole
    inquirer.prompt([{
        type: 'input',
        name: 'updateRole',
        message: 'whos role would you like to update?',
        choices: [' engineer', ' painter', ' web developer']
    }]).then(function (answers) {
        console.log(answers);
        var query = connection.query(
            "UPDATE statement ? , employee SET role_id= 2 WHERE id= 42;", // put the update staement into the connection

            function (err, res) {
                if (err) throw err;
                console.log(res.affectedRows + " product inserted!\n"); // the updated employee will then be inserted


            }
        );
    })

}

*/