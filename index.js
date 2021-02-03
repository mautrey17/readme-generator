const inquirer = require("inquirer");
const fs = require("fs");
// const { listenerCount } = require('events');

const questions = [
  {
    type: "input",
    message: "What is the project title",
    name: "title",
  },
  {
    type: "input",
    message: "What is the project description?",
    name: "description",
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "What information should be included about usage?",
    name: "usage",
  },
  {
    type: "input",
    message: "How should others users contribute to the project?",
    name: "contribution",
  },
  {
    type: "input",
    message: "How should the application be tested?",
    name: "test",
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "list",
    message: "Which type of license would you like?",
    name: "license",
    choices: [
      "Apache License 2.0",
      "ISC License",
      "MIT License",
      "GNU General Public License v2.0",
      "No license",
    ],
  },
];

const getLicense = (license) => {
  switch (license) {
    case "Apache License 2.0":
      return "[![License: Apache License 2.0](https://img.shields.io/badge/license-Apache-brightgreen.svg)](https://choosealicense.com/licenses/apache-2.0/)";
    case "ISC License":
      return "[![License: ISC License](https://img.shields.io/badge/license-ISC%20License-blue)](https://choosealicense.com/licenses/isc/)";
    case "MIT License":
      return "[![License: ISC License](https://img.shields.io/badge/license-MIT%20License-red)](https://choosealicense.com/licenses/mit/)";
    case "MIT License":
      return "[![License: ISC License](https://img.shields.io/badge/license-GNU%20GPL%20v3-orange)](https://choosealicense.com/licenses/gpl-2.0/)";
    default:
      console.log("no license selected");
      return "";
  }
};

const generateReadme = (response) => `# ${response.title}

${getLicense(response.license)}


## Table of Contents
1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [License](#License)
5. [Contributing](#Contributing)
6. [Questions](#Questions)

## Description
${response.description}

## Installation
In order to install the application, follow these steps: 

${response.installation}

## Usage
${response.usage}

## License
This application is protected under ${response.license}

## Contributing
${response.contribution}

## Tests
In order to test the application, follow these steps:
${response.test}

## Questions
You can find my other applications on my github page
Github: [${response.github}](https://github.com/${response.github}) 
Or you can email me at: ${response.email}`;

const init = () => {
  inquirer.prompt(questions).then((response) => {
    fs.writeFileSync("README.md", generateReadme(response));
    console.log(response);
  });
};

init();
