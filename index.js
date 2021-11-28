// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const generateMarkdown = require("./Develop/utils/generateMarkdown");
console.log(generateMarkdown);
// for reading file sys
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is your project's title?"
},
{
    type: "input",
    name: "Description",
    message: "Give a short description of your project."
},

{
type: "input",
name: "Installation",
message: "What steps are required to install and run your project?"
},

{
    type: "input",
    name: "Usage",
    message: "What instructions do you need to use your application?"
    },
    
   
    {
        
        type: "input",
        name: "Contribution",
        message: "Add your contributors."
    },
    
    {
        
        type: "input",
        name: "Test",
        message: "What are your testing commands?"
    },
    
    {
        type: "list",
        name: "license",
        message: "What license do you use?",
    
        choices: [
            "Apache", "Boost", "Eclipse" , "IBM", "MIT", "None"
        ]
    },
    
    {
    
        type: "input",
        name: "Email",
        message: "What is your Email? address?"
    },
    
    {
    
        type: "input",
        name: "GitHub",
        message: "What is your GitHub username for this project?"
    },
    {
    type: "input",
    name: "Repo",
    message: "What is your GitHub repository for this project?"
    },
    

];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("README.md", data, (error) => {
        if (error === true) {
            console.log(error)
        }else {
            console.log("Successful")
        }
    } )
    };

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data){
        console.log("Data", data);
    let answers = generateMarkdown(data);
    console.log(answers);
    writeToFile(answers);
    })
}
// Function call to initialize app
init();
