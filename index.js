const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamMembers = [];

const addMemberQuestion = [
    {
        type: "list",
        name: "employeeType",
        message: "What type of employee would you like to add?",
        choices: ["Engineer", "Intern", "Finish team"],
    }
];
const managerQuestions = [
    { 
        type:"input",
        name:"managerName",
        message:"What is the manager's name?",
        validate: answer =>{
            if(answer!==""){
                return true
            } else{
                return "Please enter the manager's name."
            }
        },
    },
    {
        type:"input",
        name:"managerId",
        message:"What is the manager's employee ID?",
        validate: answer =>{
            if(answer!==""){
                return true
            } else{
                return "Please enter the manager's employee ID."
            }
        },
    },
    {
        type:"input",
        name:"managerEmail",
        message:"What is the manager's email address?",
        validate: answer =>{
            if(answer!==""){
                return true
            } else{
                return "Please enter the manager's email address."
            }
        },
    },
    {
        type:"input",
        name:"managerOffice",
        message:"What is the manager's office number?",
        validate: answer =>{
            if(answer!==""){
                return true
            } else{
                return "Please enter the manager's office number."
            }
        },
    },
];
const engQuestions = [
    { 
        type:"input",
        name:"engName",
        message:"What is the engineer's name?",
        validate: answer =>{
            if(answer!==""){
                return true;
            } else{
                return "Please enter the engineer's name.";
            }
        },
    },
    {
        type:"input",
        name:"engId",
        message:"What is the engineer's employee ID?",
        validate: answer =>{
            if(answer!==""){
                return true
            } else{
                return "Please enter the engineer's employee ID."
            }
        },
    },
    {
        type:"input",
        name:"engEmail",
        message:"What is the engineer's email address?",
        validate: answer =>{
            if(answer!==""){
                return true;
            } else{
                return "Please enter the engineer's email address.";
            }
        },
    },
    {
        type:"input",
        name:"engGithub",
        message:"What is the engineer's GitHub username?",
        validate: answer =>{
            if(answer!==""){
                return true;
            } else{
                return "Please enter the engineer's GitHub username.";
            }
        },
    },
];
const internQuestions = [
    { 
        type:"input",
        name:"internName",
        message:"What is the intern's name?",
        validate: answer =>{
            if(answer!==""){
                return true;
            } else{
                return "Please enter the intern's name.";
            }
        },
    },
    {
        type:"input",
        name:"internId",
        message:"What is the intern's employee ID?",
        validate: answer =>{
            if(answer!==""){
                return true
            } else{
                return "Please enter the intern's employee ID."
            }
        },
    },
    {
        type:"input",
        name:"internEmail",
        message:"What is the intern's email address?",
        validate: answer =>{
            if(answer!==""){
                return true;
            } else{
                return "Please enter the intern's email address.";
            }
        },
    },
    {
        type:"input",
        name:"internSchool",
        message:"What is the intern's school?",
        validate: answer =>{
            if(answer!==""){
                return true;
            } else{
                return "Please enter the intern's school.";
            }
        },
    },
]

function addMember(){
    console.log("Add a team member")
    inquirer.prompt(addMemberQuestion)
    .then(answer=>{
        if(answer.employeeType === "Engineer"){
            createEngineer();
        } else if(answer.employeeType === "Intern"){
            createIntern();
        } else {
            console.log("End Program");
            // code to end the program
        }
    })
}

function createManager(){
    console.log("Enter team manager information");
    inquirer.prompt(managerQuestions)
    .then(answer=>{
        const employee = new Employee(answer.managerName, answer.managerId, answer.managerEmail)
        const manager = new Manager(answer.managerOffice)
        teamMembers.push(manager);
        addMember();
    })
}

function createEngineer(){
    console.log("Enter engineer's information");
    inquirer.prompt(engQuestions)
    .then(answer=>{
        const employee = new Employee(answer.engName, answer.engId, answer.engEmail)
        const engineer = new Engineer(answer.engGithub)
        teamMembers.push(engineer);
        addMember();
    })
}

function createIntern(){
    console.log("Enter intern's information");
    inquirer.prompt(internQuestions)
    .then(answer=>{
        const intern = new Intern(answer.internName, answer.internId, answer.internEmail)
        const intern = new Intern(answer.internSchool)
        teamMembers.push(intern);
        addMember();
    })
}

createManager();

