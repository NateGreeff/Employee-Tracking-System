const inquirer = require('inquirer')
const { mainMenuQuest } = require('./lib/questions')
const { Employee, Role, Department } = require('./models')

function init() {
  inquirer
    .prompt(mainMenuQuest)
    .then((answers) => {
      console.log(`You selected: ${answers.mainMenu}`);
      switch (answers.mainMenu) {
        case 'View All Employees':
          Employee.findAll()
            .then((employees) => {
              console.log(employees);
            })
            .catch((error) => {
              console.error(error);
            });
          break;
        case 'Add Employee':
          console.log();
          break;
        case 'Update Employee Role':
          console.log();
          break;
        case 'View All Employees':
          
      }
    })
    .catch((error) => {
      console.error(error);
    })
};

init();