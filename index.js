const inquirer = require('inquirer');
const fs = require('fs');
const { listenerCount } = require('events');

const questions = [
    {
        type: 'input',
        message: 'What is the project title',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is the project description?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What information should be included about usage?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'How should others users contribute to the project?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'How should the application be tested?',
        name: 'test'
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
    {
        type: 'list',
        message: 'Which type of license would you like?',
        name: 'license',
        choices: ['Apache License 2.0', 'ISC License', 'MIT License', 'GNU General Public License v2.0', 'No license']
    }
]

const getLicense = license =>{
    switch(license){
        case 'Apache License 2.0':
            return '![License: Apache License 2.0](https://img.shields.io/badge/license-Apache-brightgreen.svg)';
        default:
            console.log('no license selected')
            return '';
    }
}

inquirer.prompt(questions).then(response =>{
    fs.writeFileSync('sample.txt', 'super cool response will go here');
    console.log(response);
})