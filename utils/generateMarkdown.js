// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${data.license}

## Description

${data.description}

![Image 1](${data.image})

Here is the deployed link to the project: ${data.link}

## Table of Contents

- [Description](#description)
- [Instructions](#instructions)
- [Usage](#usage)
- [Credits](#credits)
- [Contributers](#contributers)
- [Testing](#testing)
- [Questions](#questions)


## Instructions

${data.instructions}

## Usage

${data.usage}

## Credits

${data.credit}

## Contributers

${data.contributers}

## Testing 

${data.testing}

## Questions

To view all of my projects, you can view them on my Github profile -  https://github.com/${data.github}

If you have any questions about my project, you can reach me via email at - ${data.email}

`;
}

module.exports = generateMarkdown;
