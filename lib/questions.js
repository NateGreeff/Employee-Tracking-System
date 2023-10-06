const sequelize = require('../config/connection');

// const manager = Employee.findOne({
//     where: { id: managerId },
//     include: [{ model: Role }],
// });
  
// const employees = Employee.findAll({
// where: { role_id: manager.Role.id },
// });

// const employeeChoices = employees.map((employee) => ({
// name: `${employee.first_name} ${employee.last_name}`,
// value: employee.id,
// }));

const mainMenuQuest = [
    {
        type: 'list',
        name: 'mainMenu',
        message: 'Welcome!\n\nWhat would you like to do?',
        choices: [
            'View All Employees',
            'Add Employee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department'
        ]
    }
];

const addEmployeeQuest = [
    {
        type: 'input',
        name: 'empFirstName',
        message: "What is the employee's first name?"
    },
    {
        type: 'input',
        name: 'empLastName',
        message: "What is the employee's last name?"
    },
    {
        type: 'list',
        name: 'empRole',
        message: "What is the employee's role?",
        choices: [
            'Manager',
            'Salesperson',
            'Engineer',
            'Accountant',
            'Lawyer',
            'HR'
        ]
    },
    // {
    //     type: 'list',
    //     name: 'empManager',
    //     message: "Who is the employee's manager?",
    //     choices: employeeChoices,
    // }
];

module.exports = { mainMenuQuest };