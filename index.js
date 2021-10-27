const fs = require('fs');
const inquirer = require('inquirer');
let employeePod = [];

function promptManager() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the team manager's name?",
                validate: input => {
                    if (input === '') {
                        return "Please enter a name."
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the team manager's employee ID?",
                validate: input => {
                    if (isNaN(input) || input < 0) {
                        return "Please enter a valid employee ID."
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the team manager's email address?",
                validate: input => {
                    if (input === '') {
                        return "Please enter an email address."
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "officeNumber",
                message: "What is the team manager's office number?",
                validate: input => {
                    if (isNaN(input) || input < 0) {
                        return "Please enter a valid office number."
                    }
                    else {
                        return true;
                    }
                }
            }
        ])
        .then((answer) => {
            let manager = new Manager(answer.name, answer.id, answer.email, answer.officeNumber);
            employeePod.push(manager);
            promptAddEmployee();
        }
    );
}

function promptAddEmployee() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "addEmployee",
                message: "Do you want to add a member to the team, or are you finished?",
                choices: [
                    "Engineer",
                    "Intern",
                    "Finished"
                ]
            }
        ])
        .then((answer) => {
            if (answer.addEmployee === 'Engineer') {
                promptEngineer();
            }
            else if (answer.addEmployee === 'Intern') {
                promptIntern();
            }
            else if (answer.addEmployee === 'Finished') {
                buildTeamHTML(employeePod);
            }
        });
}

function promptEngineer() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the engineer's name?",
                validate: input => {
                    if (input === '') {
                        return "Please enter a name."
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the engineer's employee ID?",
                validate: input => {
                    if (isNaN(input) || input < 0) {
                        return "Please enter a valid employee ID."
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the engineer's email address?",
                validate: input => {
                    if (input === '') {
                        return "Please enter an email address."
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "username",
                message: "What is the engineer's GitHub username?",
                validate: input => {
                    if (input === '') {
                        return "Please enter a valid username."
                    }
                    else {
                        return true;
                    }
                }
            }
        ])
        .then((answer) => {
            let engineer = new Engineer(answer.name, answer.id, answer.email, answer.username);
            employeePod.push(engineer);
            promptAddEmployee();
        });
}

function promptIntern() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "name",
                message: "What is the intern's name?",
                validate: input => {
                    if (input === '') {
                        return "Please enter a name."
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "id",
                message: "What is the intern's employee ID?",
                validate: input => {
                    if (isNaN(input) || input < 0) {
                        return "Please enter a valid employee ID."
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is the intern's email address?",
                validate: input => {
                    if (input === '') {
                        return "Please enter an email address."
                    }
                    else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "school",
                message: "What is the intern'school?",
                validate: input => {
                    if (input === '') {
                        return "Please enter a valid school."
                    }
                    else {
                        return true;
                    }
                }
            }
        ])
        .then((answer) => {
            let intern = new Intern(answer.name, answer.id, answer.email, answer.school);
            employeePod.push(intern);
            promptAddEmployee();
        });
}