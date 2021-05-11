const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require("./lib/Employee");
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

inquirer.prompt([{
      // type: 'input',
      message: "Enter team member's name",
      name: "name"
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
      type: "list",
      message: "Would you like to add more team members?",
      choices: 
      ["yes",
        "no"],
        name: "moMembers"
    }])