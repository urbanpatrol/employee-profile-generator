// Dependencies
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

// Constructors
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];

function init() {
    console.log("Build your team:");
    createManagerPrompt();
}

// Prompt user to create a manager when application is started
function createManagerPrompt() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Manager's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please enter a name!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "Manager's id?",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log("Please enter an id!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Manager's email?",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please enter an email!");
                return false;
            }
        },

    {
        type: "input",
        name: "officeNumber",
        message: "Manager's office number?",
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log("Please enter an office number!");
                return false;

            }
        }
    }


    ]).then(response => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        teamMembers.push(manager);
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
    }]).then(response => {
        if (response.nextEmployee === "Engineer") {
            addEngineer();
        } else if (response.nextEmployee === "Intern") {
            addIntern();
        } else {
            generateHTML(teamMembers);
        }
    })
}

// Add Engineer when selected
function addEngineer() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Engineer's name?",
    },
    {
        type: "input",
        name: "id",
        message: "Engineer's id?",
    },
    {
        type: "input",
        name: "email",
        message: "Engineer's email?",
    },
    {
        type: "input",
        name: "github",
        message: "Engineer's GitHub username?",
    }
    ]).then(response => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        teamMembers.push(engineer);
        promptForNextEmployee();
    })
}

// Add Intern when selected
function addIntern() {
    inquirer.prompt([{
        type: "input",
        name: "name",
        message: "Intern's name?",
    },
    {
        type: "input",
        name: "id",
        message: "Intern's id?",
    },
    {
        type: "input",
        name: "email",
        message: "Intern's email?",
    },
    {
        type: "input",
        name: "school",
        message: "Intern's school?",
    }
    ]).then(response => {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        teamMembers.push(intern);
        promptForNextEmployee();
    })
}

function generateHTML(teamMembers) {
    const html = render(teamMembers);
    fs.writeFile(outputPath, html, { encoding: 'utf8' });
    console, log("Your team has been created successfully!");
    init();
};
