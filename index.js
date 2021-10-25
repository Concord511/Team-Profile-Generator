const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What's your name?"
        },
        {
            type: "number",
            name: "age",
            message: "How old are you?"
        }
    ])
    .then((answer) => {

    });