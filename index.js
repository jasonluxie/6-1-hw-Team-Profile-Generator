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
const engQuestions = [
    {
        type: "input",
        message: "What is the name of the engineer?",
        name: "engName",
    },
    {
        type: "input",
        message: "What is the employee ID of the engineer",
        name: "engID",
    },
    {
        type: "input",
        message: "What is the email address of the engineer?",
        name: "engEmail",
    },
    {
        type: "input",
        message: "What is the github username of the engineer?",
        name: "engGit",
    },
];
const intQuestions = [
    {
        type: "input",
        message: "What is the name of the intern?",
        name: "intName",
    },
    {
        type: "input",
        message: "What is the employee ID of the intern",
        name: "intID",
    },
    {
        type: "input",
        message: "What is the email address of the intern?",
        name: "intEmail",
    },
    {
        type: "input",
        message: "What school is the intern from?",
        name: "intSchool",
    },
];
const menu = [
    {
        type: "list",
        name: "menuSelect",
        message:
            "Would you like to add an engineer, intern, or finish making your team?",
        choices: ["Engineer", "Intern", "Finish and Exit"],
    },
];
const team = [];
const init = () => {
    inquirer
        .prompt(initQuestions)
        .then((r) => {
            let newManager = new Manager(
                r.managerName,
                r.managerID,
                r.managerEmail,
                r.managerOffice
            );
            team.push(newManager);
        })
        .then(() => {
            menuInit();
        })
        .catch(() => {
            console.log("Something went wrong, please try again");
        });
};
const menuInit = () => {
    inquirer
        .prompt(menu)
        .then((response) => {
            if (response.menuSelect === "Engineer") {
                inquirer
                    .prompt(engQuestions)
                    .then((r) => {
                        let newEng = new Engineer(
                            r.engName,
                            r.engID,
                            r.engEmail,
                            r.engGit
                        );
                        team.push(newEng);
                        menuInit();
                    })
                    .catch();
            }
            if (response.menuSelect === "Intern") {
                inquirer
                    .prompt(intQuestions)
                    .then((r) => {
                        let newInt = new Intern(
                            r.intName,
                            r.intID,
                            r.intEmail,
                            r.intSchool
                        );
                        team.push(newInt);
                        menuInit();
                    })
                    .catch();
            }
            if (response.menuSelect === "Finish and Exit") {
                finish(team);
            }
        })
        .catch(() => {
            console.log("Something went wrong, please try again.");
        });
};

const finish = (team) => {
    fs.writeFile("./dist/team.html", pageTemplate(team), (err) => {
        if (err) {
            return console.error(err);
        }
    });
};

init();

// const engInit = () => {
//     inquirer.prompt(engQuestions).then().catch();
// }

// const intInit = () => {
//     inquirer.prompt(intQuestions).then().catch();
// }
