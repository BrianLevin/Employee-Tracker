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