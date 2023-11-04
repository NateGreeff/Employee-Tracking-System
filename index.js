const inquirer = require('inquirer')
// const table = require('console.table')
const { Employee, Role, Department } = require('./models')

function init() {
    console.log('\nWelcome to the Employee Tracker!\n');
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: '\nWhat would you like to do?\n',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Update an employee', 'Delete a Department', 'Delete a employee role', 'Delete an Employee', 'Exit']
        }
    ])
    .then((response) => {
        switch (response.action) {
            case 'View all departments':
                viewDepartments()
                break
            case 'View all roles':
                viewRoles()
                break
            case 'View all employees':
                viewEmployees()
                break
            case 'Add a department':
                addDepartment()
                break
            case 'Add a role':
                addRole()
                break
            case 'Add an employee':
                addEmployee()
                break
            case 'Update an employee role':
                updateEmployeeRole()
                break
            case 'Update an employee':
                updateEmployee()
                break
            case 'Delete a Department':
                deleteDepartment()
                break
            case 'Delete a employee role':
                deleteRole()
                break
            case 'Delete an Employee':
                deleteEmployee()
                break
            case 'Exit':
                process.exit()
        }
    })
}

function viewDepartments() {
  Department.findAll()
  .then((departments) => {
    console.table(departments.map(department => department.dataValues), ['id', 'name'])
    init()
  })
}

function viewRoles() {
  Role.findAll()
  .then((roles) => {
    console.table(roles.map(role => role.dataValues), ['id', 'title', 'salary', 'department_id'])
    init()
  })
}

function viewEmployees() {
    Employee.findAll()
    .then((employees) => {
        console.table(employees.map(employee => employee.dataValues), ['id', 'first_name', 'last_name', 'role_id', 'manager_id'])
        init()
    })
}

function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'department_name',
            message: '\nWhat is the name of the department you would like to add?'
        }
    ])
    .then((response) => {
        Department.create({ name: response.department_name })
        .then(() => {
            console.log(`\nDepartment "${response.department_name}" added successfully!`)
            init()
        })
    })
}

function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: '\nWhat is the title of the role you would like to add?'
        },
        {
            type: 'input',
            name: 'salary',
            message: '\nWhat is the salary of the role you would like to add?'
        },
        {
            type: 'input',
            name: 'department_id',
            message: '\nWhat is the department id of the role you would like to add?'
        }
    ])
    .then((response) => {
        Role.create(response)
        .then(() => {
            console.log(`\nRole "${response.title}" added successfully!`)
            init()
        })
    })
}

function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: '\nWhat is the first name of the employee you would like to add?'
        },
        {
            type: 'input',
            name: 'last_name',
            message: '\nWhat is the last name of the employee you would like to add?'
        },
        {
            type: 'input',
            name: 'role_id',
            message: '\nWhat is the role id of the employee you would like to add?'
        },
        {
            type: 'input',
            name: 'manager_id',
            message: '\nWhat is the manager id of the employee you would like to add?'
        }
    ])
    .then((response) => {
        Employee.create(response)
        .then(() => {
            console.log(`\nEmployee "${response.first_name} ${response.last_name}" added successfully!`)
            init()
        })
    })
}

function updateEmployeeRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employee_id',
            message: '\nWhat is the id of the employee whose role you would like to update?'
        },
        {
            type: 'input',
            name: 'role_id',
            message: '\nWhat is the new role id of the employee?'
        }
    ])
    .then((response) => {
        Employee.update({ role_id: response.role_id }, { where: { id: response.employee_id } })
        .then(() => {
            console.log('Employee role updated successfully!')
            init()
        })
    })
}

function updateEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employee_id',
            message: '\nWhat is the id of the employee you would like to update?'
        },
        {
            type: 'input',
            name: 'first_name',
            message: '\nWhat is the new first name of the employee?'
        },
        {
            type: 'input',
            name: 'last_name',
            message: '\nWhat is the new last name of the employee?'
        },
        {
            type: 'input',
            name: 'role_id',
            message: '\nWhat is the new role id of the employee?'
        },
        {
            type: 'input',
            name: 'manager_id',
            message: '\nWhat is the new manager id of the employee?'
        }
    ])
    .then((response) => {
        Employee.update({ first_name: response.first_name, last_name: response.last_name, role_id: response.role_id, manager_id: response.manager_id }, { where: { id: response.employee_id } })
        .then(() => {
            console.log('Employee updated successfully!')
            init()
        })
    })
}

function deleteDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'department_id',
            message: '\nWhat is the id of the department you would like to delete?'
        }
    ])
    .then((response) => {
        Role.findAll({ where: { department_id: response.department_id } })
        .then((roles) => {
            roles.forEach((role) => {
                Employee.destroy({ where: { role_id: role.id } });
            });

            Role.destroy({ where: { department_id: response.department_id } })
            .then(() => {
                Department.destroy({ where: { id: response.department_id } })
                .then(() => {
                    console.log('Department, associated roles, and employees deleted successfully!')
                    init()
                })
            })
        })
    })
}

function deleteRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'role_id',
            message: '\nWhat is the id of the role you would like to delete?'
        }
    ])
    .then((response) => {
        Employee.destroy({ where: { role_id: response.role_id } })
        .then(() => {
            Role.destroy({ where: { id: response.role_id } })
            .then(() => {
                console.log('Role and associated employees deleted successfully!')
                init()
            })
        })
    })
}

function deleteEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employee_id',
            message: '\nWhat is the id of the employee you would like to delete?'
        }
    ])
    .then((response) => {
        Employee.destroy({ where: { id: response.employee_id } })
        .then(() => {
            console.log('Employee deleted successfully!')
            init()
        })
    })
}

init()