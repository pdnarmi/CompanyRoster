const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');

const writefileAsync = util.promisify(fs.writeFile);


const team = [];

const newTeam = ()=>{
        inquirer.prompt([{
            name: 'manName',
            message: 'Please enter manager name'
        },
        {
            name: 'manEmail',
            message: 'Please enter manager e-mail'
        },
        {
            name: 'manID',
            message: 'Please enter manager ID (No octal literals!)'
        },
        {
            name: 'officeNum',
            message: 'Please enter manager office number (No octal literals!)'
        },
        
    ]).then(answers =>{
        team.push(new Manager(answers.manName, answers.manID, answers.manEmail, answers.officeNum));
        

        newEmployee();
    })
};

const newEmployee = ()=>{
    inquirer.prompt([{
        type: 'list',
        name: 'addEmp',
        message: 'Enter another employee?',
        choices: ['Yes', 'No']
    } 
    ]).then(answers =>{
        if(answers.addEmp === 'Yes'){
            addNewEmployee();
        } else {
            createRoster(team).then(()=>{
                console.log('Successfully wrote roster HTML!');
            })
            .catch(err => console.log(err));
        }
    })
    
}

const addIntern = ()=>{
    inquirer.prompt([
        {
            name: 'intName',
            message: 'Please enter intern name'
        },
        {
            name: 'intEmail',
            message: 'Please enter intern e-mail'
        },
        {
            name: 'intID',
            message: 'Please enter intern ID (No octal literals!)'
        },
        {
            name: 'intSchool',
            message: 'Please enter intern school'
        }
    ]).then(answers => {
        team.push(new Intern(answers.intName, answers.intEmail, answers.intID, answers.intSchool));

        newEmployee();
    });
};

const addEngineer = ()=>{
    inquirer.prompt([
        {
            name: 'engName',
            message: 'Please Enter engineer name'
        },
        {
            name: 'engEmail',
            message:'Please enter engineer e-mail'
        },
        {
            name: 'engID',
            message: 'Please enter engineer ID (No octal literals!)'
        },
        {
            name: 'engGit',
            message: 'Please enter engineer GitHub username'
        }
    ]).then(answers => {
        team.push(new Engineer(answers.engName, answers.engEmail, answers.engID, answers.engGit));

        newEmployee();
    });
};

const addNewEmployee = ()=>{
    inquirer.prompt({
        type: 'list',
        name: 'empType',
        message: 'Which type of employee would you like to add?',
        choices: ['Intern', 'Engineer']
    }).then(answers => {
        if (answers.empType === 'Intern'){
            addIntern();
        }else {
            addEngineer();
        }
    })
}



const generateHTML = ()=>{

    const output =[]

    for(i = 0; i<team.length; i++){
        if(team[i] instanceof Manager){
            output.push(` 
            <div class="card" id = "manager" style= "padding: 16px; text-align: center">
            <img src="https://i.ibb.co/YcjN1q6/manager.png" alt="manager">
            <p>Name:${team[i].name}</p>
            <p>ID:${team[i].id}</p>
            <p>E-mail:${team[i].email}</p>
            <p>Office No.:${team[i].officeNumber}</p>
            <p>Role:Manager</p>
          </div>`);
        } else if(team[i] instanceof Intern){
            output.push(`<div class="card" id = "intern">
            <img src="https://i.ibb.co/84Yx2by/rsz-pencil.png" alt="intern">
            <p>Name:${team[i].name}</p>
            <p>ID:${team[i].id}</p>
            <p>E-mail:${team[i].email}</p>
            <p>School:${team[i].school}</p>
            <p>Role:Intern</p>
          </div>`)
        } else if(team[i] instanceof Engineer){
            output.push(`<div class="card" id = "engineer">
            <img src="https://i.ibb.co/zXyVG6h/rsz-1images.jpg" alt="engineer">
            <p>Name:${team[i].name}</p>
            <p>ID:${team[i].id}</p>
            <p>E-mail:${team[i].email}</p>
            <p>GitHub${team[i].gitHub}</p>
            <p>Role:Engineer</p>
          </div>`)
        }
    }
    return ` <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Company Roster</title>
         <link
         rel="stylesheet"
         href="https:stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
         integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
         crossorigin="anonymous"
       />
       <script src="https:ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
       <link rel = "stylesheet" href = "style.css">
     </head>
     <body>
       <div class="jumbotron">
         <h1 class="display-4 text-center">Better Daze</h1>
         <hr>
         <p class="lead text-center">Company Roster</p>
         <hr class="my-4">
         <p>USERS! Take note that this is not an updateable list. If you wish to update the company roster, a new file MUST be created!</p>
       </div>
       <div id = 'cardDiv'class="tab1cards" style='display: flex; flex-direction: row;'>` +

        output.join('')+
        
       `</div>
     
     </body>
     </html>`
};

newTeam();
    


const createRoster = (team)=>{

    const html = generateHTML(team);

    return writefileAsync('index.html', html);
};