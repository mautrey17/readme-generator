const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        message: 'What is the project title',
        name: 'title'
    },
    // {
    //     type: 'input',
    //     message: 'What is the project description?',
    //     name: 'description'
    // },
    // {
    //     type: 'input',
    //     message: 'What are the installation instructions?',
    //     name: 'installation'
    // },
    // {
    //     type: 'input',
    //     message: 'What information should be included about usage?',
    //     name: 'usage'
    // },
    // {
    //     type: 'input',
    //     message: 'How should others users contribute to the project?',
    //     name: 'contribution'
    // },
    // {
    //     type: 'input',
    //     message: 'How should the application be tested?',
    //     name: 'test'
    // },
    // {
    //     type: 'input',
    //     message: 'What is your github username?',
    //     name: 'github'
    // },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    }
]

inquirer.prompt(questions).then(response =>{
    console.log(response);
})