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

module.exports = { mainMenuQuest };