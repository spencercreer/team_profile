const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const teamMembers = [];
// inquirer promt question arrays
// add team member prompt question
const addMemberQuestion = [
    {
        type: "list",
        name: "employeeType",
        message: "What would you like to do?",
        choices: ["Add Engineer", "Add Intern", "Finish team"],
    }
];
// manager prompt questions
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
// engineer prompt questions
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
// intern prompt questions
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

// prompt to add member and call function based on list choice
function addMember(){
    console.log("Add a team member")
    inquirer.prompt(addMemberQuestion)
    .then(answer=>{
        if(answer.employeeType === "Add Engineer"){
            createEngineer();
        } else if(answer.employeeType === "Add Intern"){
            createIntern();
        } else {
            fs.writeFile("index.html", generateHtml(), (err) =>
            err ? console.error(err) : console.log(`--------------\nTeam Profile Generated\n--------------`));
        }
    });
}

// prompt manager questions then pass to Manager class and push to teamMembers array
function createManager(){
    console.log("Enter team manager information");
    inquirer.prompt(managerQuestions)
    .then(answer=>{
        const manager = new Manager(answer.managerName, answer.managerId, answer.managerEmail, answer.managerOffice);
        teamMembers.push(manager);
        console.log(manager.getEmail());
        addMember();
    })
}

// prompt engineer questions then pass to Engineer class and push to teamMembers array
function createEngineer(){
    console.log("Enter engineer's information");
    inquirer.prompt(engQuestions)
    .then(answer=>{
        const engineer = new Engineer(answer.engName, answer.engId, answer.engEmail, answer.engGithub);
        teamMembers.push(engineer);
        addMember();
    })
}

// prompt intern questions then pass to Intern class and push to teamMembers array
function createIntern(){
    console.log("Enter intern's information");
    inquirer.prompt(internQuestions)
    .then(answer=>{
        const intern = new Intern(answer.internName, answer.internId, answer.internEmail, answer.internSchool);
        teamMembers.push(intern);
        addMember();
    })
}

function generateHtml(){
    let gHtml = `<!doctype html>
    <html lang="en">
      <head>
        <title>Team Profile</title>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      </head>
      <body>
          <header>
    
          </header>
          <main>
              <div class="jumbotron">
                  <h1 class="display-3 text-center">My Team</h1>
                  <!-- <p class="lead">Jumbo helper text</p> -->
                  <hr class="my-2">
                  <!-- <p>More info</p> -->
                  <!-- <p class="lead">
                      <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
                  </p> -->
                  <div id="team-profile">`
            // for each element of teamMembers array, append html to index.html
            for( i=0; i < teamMembers.length; i++){
                gHtml += `
                    <div class="card text-white bg-secondary mb-3">
                        <div class="card-header">${teamMembers[i].name}</div>
                        <div class="card-body">
                            <h5 class="card-title">${teamMembers[i].getRole()}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <div class="list-group">
                                <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">Employee ID: ${teamMembers[i].getId()}</a>
                                <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">Email: ${teamMembers[i].getEmail()}</a>
                                <a href="#" class="list-group-item list-group-item-action list-group-item-secondary">Attribute: ${teamMembers[i].getAttr()}</a>
                            </div>
                        </div>
                    </div>`;
            }
    gHtml += `
            </div>
        </main>
        <footer>

        </footer>
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <script src="../dist/index.html"></script>
    </body>
</html>`
return gHtml;
}

// call createManager function
createManager();
