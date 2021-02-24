const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamMembers = [];

function createEngineer(){
    console.log("Build your team")
    inquirer.prompt([{ 
        type:"input",
        name:"engineer-name",
        message:"What is the engineer's name?",
        validate: answer =>{
            if(answer!==""){
                return true
            } else{
                return "Please enter the engineer's name."
            }
        },
        type:"input",
        name:"engineer-email",
        message:"What is the engineer's email address?",
        validate: answer =>{
            if(answer!==""){
                return true
            } else{
                return "Please enter the engineer's email address."
            }
        },
        type:"input",
        name:"engineer-github",
        message:"What is the engineer's GitHub username?",
        validate: answer =>{
            if(answer!==""){
                return true
            } else{
                return "Please enter the engineer's GitHub username."
            }
        },
    }])
    .then(answer=>{
        const engineer = new Engineer(answer.engineerName, answer.engineerEmail, answer.engineerGithub)
        teamMembers.push(engineer);
        createEngineer
    })
}

