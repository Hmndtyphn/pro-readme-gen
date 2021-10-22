// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const Inquire = require("inquirer");
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "what is the title of your project"
},
{
    type: "input",
    name: "Repo Name",
    message: "what is the name of the repo"
},

{
type: "input",
name: "Description",
message: "What is the description of the project"
},

];
console.log(questions)
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
