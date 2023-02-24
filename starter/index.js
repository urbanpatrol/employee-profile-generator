const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// Prompt user to create a manager when application is started
function createManagerPrompt() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the Manager's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the Manager's id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the Manager's email?",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the Manager's office number?",
    }]).then(response => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        console.log(manager);
        promptForNextEmployee();
    })
}

// Prompt for next employee
function promptForNextEmployee() {
    inquirer.prompt([{
        type: "list",
        name: "nextEmployee",
        message: "Would you like to add an Engineer or an Intern?",
        choices: ["Engineer", "Intern", "I don't want to add any more team members"]
    }])
}

function addTeamMember(Engineer) {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the Engineer's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the Engineer's id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the Engineer's email?",
    },
    {
        type: "input",
        name: "github",
        message: "What is the team Engineer's GitHub username?",
    }]).then(response => {
        const teamMember = new Engineer(response.name, response.id, response.email, response.github);
        console.log(teamMember);
        promptForNextEmployee();
    })
}

function addTeamMember(Intern) {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is the Intern's name?",
    },
    {
        type: "input",
        name: "id",
        message: "What is the Intern's id?",
    },
    {
        type: "input",
        name: "email",
        message: "What is the Intern's email?",
    },
    {
        type: "input",
        name: "school",
        message: "What is the Intern's school?",
    }]).then(response => {
        const teamMember = new Intern(response.name, response.id, response.email, response.school);
        console.log(teamMember);
        promptForNextEmployee();
    })
}





