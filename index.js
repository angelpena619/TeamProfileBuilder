const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require("./lib/Employee");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHTML = (answers) =>
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
<div class="col-6">
<div class="card mx-auto mb-3" style="width: 18rem">
<h5 class="card-header">${answers.name}<br /><br />Intern</h5>
<ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${answers.id}</li>
    <li class="list-group-item">Email Address: ${answers.email}</li>
    <li class="list-group-item">School: ${answers.school}</li>
</ul>
</div>
</div>
</div>
</body>
</html>`;

const newTeamMemberQuestions= [{
  // type: 'input',
  message: "Enter team member's name",
  name: "name"
},
{
  message: "Enter github",
  name: "github",
},
{
  type: "list",
    message: "Select team member's role",
    choices: 
    ["Engineer",
      "Intern",
      "Manager"],
    name: "role"
},
{
  message: "Enter team member's id",
  name: "id",
},
{
  message: "Enter team member's email address",
    name: "email"
},
{
  message: "Enter School name",
    name: "school"
},
{
  type: "list",
  message: "Would you like to add more team members?",
  choices: 
  ["yes",
    "no"],
    name: "moMembers"
}];

const addTeamMember = async ()=>{
  inquirer.prompt(newTeamMemberQuestions)
  .then((answers) => {
    console.log(answers);
    if (answers.moMembers === "yes") {
      teamMembers.push(answers);

    return await  addTeamMember()
    } else {
      console.log(teamMembers);
    }
    
  })
}

var teamMembers = []
addTeamMember()
.then(()=>{
  for (i = 0; i < teamMembers.length; i++){
    var currentTeamMember = teamMembers [0]
    var htmlBucket = generateHTML (currentTeamMember)
     fs.appendFile('index.html', htmlBucket, (err) =>
       err ? console.log(err) : console.log('Successfully created your team!')
     );
  }
})
  // const htmlPageContent = generateHTML(answers);

  // fs.writeFile('index.html', htmlPageContent, (err) =>
  //   err ? console.log(err) : console.log('Successfully created your team!')
  // );


