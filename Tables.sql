CREATE TABLE `department`( --department table and all its values
id INT NOT NULL,
make VARCHAR(30),
PRIMARY KEY(id)
);

CREATE TABLE `role` ( -- role table and all its values
id INT NOT NULL,
make VARCHAR(30),
salary DECIMAL,
 department_id  INT

);

CREATE TABLE `employee` ( -- employee table and all its values
id INT NOT NULL
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT


);

SELECT employee.id, employee.first_name, employee.last_name, -- Select interface which will allow me to view all the tables
	role.title, role.salary, department.name AS departmentName
FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON role.department_id = department.id;

UPDATE `employee` --UPDATE Function whcih will aloow to update the employees role

SET
role_id=2 

WHERE 
 id= 42; 


