const fs = require('fs')
const inquirer = require('inquirer')
const employeeMod = require('./Assets/js/Employee.js')
const engineerMod = require('./Assets/js/Engineer.js')
const internMod = require('./Assets/js/Intern.js')
const managerMod = require('./Assets/js/Manager.js')

const initQuestions = [
    'What is the name of the team manager?',
    'What is the employee ID of the team manager?',
    'What is the email address of the team manager?',
    'What is the office number of the team manager?',
]

inquirer.prompt(initQuestions)
    // Response is written to team manager html 
    .then((response) => {})
    // Then needs to trigger an inquirer prompt (list of options) which calls a polymorphic function:
        // if (input = engineer) {trigger inquirer prompts for new EngineerMod} else etc. 
        // After user input, need to return to minion, add callback function at the end of every user input to trigger the inquirer menu
            // Each input gets concatenated to a template literal called ${content} which is sandwiched between the header and footer of the html file
        // if (input = finished), writeFile('index.html', ${full html}, (err) => {return err})
    .catch((error) => {})