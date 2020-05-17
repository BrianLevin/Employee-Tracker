CREATE TABLE `department`(
id INT NOT NULL,
make VARCHAR(30),
PRIMARY KEY(id)
);

CREATE TABLE `role` (
id INT NOT NULL,
make VARCHAR(30),
salary DECIMAL,
 department_id  INT

);

CREATE TABLE `employee` (
id INT NOT NULL
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
manager_id INT


);

SELECT employee.id, employee.first_name, employee.last_name,
	role.title, role.salary, department.name AS departmentName
FROM employee
LEFT JOIN role ON employee.role_id = role.id
LEFT JOIN department ON role.department_id = department.id;

Update role

SET
employee.id

WHERE 


