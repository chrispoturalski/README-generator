// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//require the following function in 
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
//const { default: choices } = require('inquirer/lib/objects/choices');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What do you want your README file to be named?',
        name: 'fileName'
    },
    {
        type: 'input',
        message: 'What is the title of my project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is your project all about?',
        name: 'description'
    },
    {
        type: 'list',
        message: 'What type of license is your project?',
        name: 'license',
        choices: [
            {name: "MIT", value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"},
            {name: "ISC", value: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"},
            {name: "Mozilla 2.0", value:  "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"},
            {name: "None", value: "No licenses were used in this project"},
        ]
    },
    {
        type: 'input',
        message: 'What were the installation instructions?',
        name: 'instructions'
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Who do you credit this project to?',
        name: 'credit'
    },
    {
        type: 'input',
        message: 'Were there any contributers - if so, who?',
        name: 'contributers'
    },
    {
        type: 'input',
        message: 'What are the testing instructions?',
        name: 'testing'
    },
    {
        type: 'input',
        message: 'What is your Github account name?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(response => {
            const md = generateMarkdown(response)
            writeToFile(`${response.fileName}.md`, md)
            })
}

// Function call to initialize app
init();





//WHEN I enter my GitHub username
//THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
//WHEN I enter my email address
//THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
//WHEN I click on the links in the Table of Contents
//THEN I am taken to the corresponding section of the README
