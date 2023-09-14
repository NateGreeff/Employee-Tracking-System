const inquirer = require('inquirer')
const { mainMenuQuest } = require('./lib/questions')

function init() {
  inquirer
    .prompt(mainMenuQuest)
    .then((answers) => {
      console.log(`You selected: ${answers.mainMenu}`);
      switch (answers.mainMenu) {
        case 'View All Employees':
          console.log();
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