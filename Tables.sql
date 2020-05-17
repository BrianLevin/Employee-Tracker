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