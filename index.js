const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const pageTemplate = require("./src/page-template");

const initQuestions = [
    {
        type: "input",
        message: "What is the name of the team manager?",
        name: "managerName",
    },
    {
        type: "input",
        message: "What is the employee ID of the team manager?",
        name: "managerID",
    },
    {
        type: "input",
        message: "What is the email address of the team manager?",
        name: "managerEmail",
    },
    {
        type: "input",
        message: "What is the office number of the team manager?",
        name: "managerOffice",
    },
];
const engQuestions = [{}];
const intQuestions = [];
const menu = [
    {
        type: "list",
        name: "menuSelect",
        message:
            "Would you like to add an engineer, intern, or finish making your team?",
        choices: ["Engineer", "Intern", "Finish and Exit"],
    },
];

const init = () => {
    inquirer
        .prompt(initQuestions)
        // Response is written to team manager html
        .then((r) => {
            let newManager = new Manager(
                r.managerName,
                r.managerID,
                r.managerEmail,
                r.managerOffice
            );
            console.log(newManager);
        })
        // Then needs to trigger an inquirer prompt (list of options) which calls a polymorphic function:
        // if (input = engineer) {trigger inquirer prompts for new EngineerMod} else etc.
        // After user input, need to return to minion, add callback function at the end of every user input to trigger the inquirer menu
        // Each input gets concatenated to a template literal called ${content} which is sandwiched between the header and footer of the html file
        // if (input = finished), writeFile('index.html', ${full html}, (err) => {return err})
        .catch((error) => {});
};

const finish = (team) => {
    fs.writeFile("./dist/team.html", pageTemplate(team), (err) => {
        if (err) {
            return console.error(err);
        }
    });
};

const menu = () => {
    inquirer.prompt(menu).then().catch();
};

// init();