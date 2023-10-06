USE employee_tracker_db;

-- Create departments table
CREATE TABLE departments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

-- Create roles table
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2) NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id) REFERENCES departments(id)
);

-- Create employees table
CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id),
    FOREIGN KEY (manager_id) REFERENCES employees(id)
);
-- END: 5j8f4d9g3h2k

-- Seed departments table
INSERT INTO departments (name)
VALUES ('Sales'), ('Marketing'), ('Finance'), ('Human Resources');

-- Seed roles table
INSERT INTO roles (title, salary, department_id)
VALUES 
    ('Sales Manager', 80000, 1),
    ('Sales Representative', 50000, 1),
    ('Marketing Manager', 75000, 2),
    ('Marketing Coordinator', 45000, 2),
    ('Financial Analyst', 65000, 3),
    ('Accountant', 55000, 3),
    ('HR Manager', 70000, 4),
    ('HR Coordinator', 45000, 4);

-- Seed employees table
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
    ('John', 'Doe', 1, NULL),
    ('Jane', 'Smith', 2, 1),
    ('Bob', 'Johnson', 3, NULL),
    ('Sara', 'Lee', 4, 3),
    ('Mike', 'Brown', 5, NULL),
    ('Emily', 'Davis', 6, 5),
    ('Tom', 'Wilson', 7, NULL),
    ('Amy', 'Taylor', 8, 7);