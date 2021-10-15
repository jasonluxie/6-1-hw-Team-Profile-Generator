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
    .then((response) => {})
    .catch((error) => {})