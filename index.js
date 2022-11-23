// TODO: Include packages needed for this application
const inquirer = require('inquirer');
//require the following function in 
const generateMarkdown = require('./assets/utils/generateMarkdown');
const fs = require('fs');
const { default: choices } = require('./assets/node_modules/inquirer/lib/objects/choices');


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
        type: 'list',
        message: 'Here are the table of contents',
        name: 'table of contents'
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
        message: 'What are some questions to be answered?',
        name: 'questions'
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




//WHEN I am prompted for information about my application repository
//THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
//WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
//THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
//WHEN I enter my GitHub username
//THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
//WHEN I enter my email address
//THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
//WHEN I click on the links in the Table of Contents
//THEN I am taken to the corresponding section of the README
