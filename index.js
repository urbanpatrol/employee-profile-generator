// dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");

// constructors
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// constants
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

const teamMembers = [];

function init() {
    console.log("Start building your team:");
    createManagerPrompt();

    // prompt user to create a manager when application is started
    function createManagerPrompt() {
        console.log("Create a Manager");
        inquirer.prompt([{
            type: "input",
            name: "managerName",
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
            name: "managerId",
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
            name: "managerEmail",
            message: "Manager's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter an email!");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "managerOfficeNumber",
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
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);
            teamMembers.push(manager);
            promptForNextEmployee();
        })
    }

    // prompt for next employee
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
                console.log("Thank you. Your team has been created successfully."); // console log success message
            }
        })
    }

    // add engineer when selected
    function addEngineer() {
        inquirer.prompt([{
            type: "input",
            name: "engineerName",
            message: "Engineer's name?",
        },
        {
            type: "input",
            name: "engineerId",
            message: "Engineer's id?",
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "Engineer's email?",
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "Engineer's GitHub username?",
        }
        ]).then(response => {
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
            teamMembers.push(engineer);
            promptForNextEmployee();
        })
    }

    // add intern when selected
    function addIntern() {
        inquirer.prompt([{
            type: "input",
            name: "internName",
            message: "Intern's name?",
        },
        {
            type: "input",
            name: "internId",
            message: "Intern's id?",
        },
        {
            type: "input",
            name: "internEmail",
            message: "Intern's email?",
        },
        {
            type: "input",
            name: "internSchool",
            message: "Intern's school?",
        }
        ]).then(response => {
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
            teamMembers.push(intern);
            promptForNextEmployee();
        })
    }
    // generate html 
    function generateHTML(teamMembers) {
        const html = render(teamMembers);
        return fs.writeFileSync(outputPath, html, { encoding: 'utf8' });
    }
};

init();
