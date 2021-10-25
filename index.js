const fs = require('fs');
const inquirer = require('inquirer');

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

    });