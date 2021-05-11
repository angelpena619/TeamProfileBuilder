const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: "What is your project's name",
      name: 'projectName',
    },
    {
      type: 'input',
      message: "Please write a short description of your project:",
      name: 'projectDescription',
    },
    {
      type: 'list',
      message: "What kind of license should your project have?",
      choices: ["MIT License","GNU License","APACHE License"],
      name: 'licence',
    },
    {
      type: 'input',
      message: "What command should be run to install dependencies?",
      name: 'depend',
    },
    {
      type: 'input',
      message: "What command should be run to run tests?",
      name: 'testCommand',
    },
      {
        type: 'input',
        message: "What does the user need to know about using the repo?",
        name: 'needToknow',
      },
        {
          type: 'input',
          message: "What does the user need to know about contributing to the repo?",
          name: 'repoContr',
        },
      
  ])

  .then((response) => {
    console.log(response)
    
    var readme = makeReadme(response)

    fs.writeFile("README.md",readme,err => {
      console.log(err)


    })
    
    }
  );
function makeReadme(response){
  return`
  # ${response.projectName}
  ##  Description
   ${response.projectDescription}
  ## Table of Contents\n
  *[Insallation](#Insallation)\n 
  *[Usage](#Usage)\n
  *[License](#License)\n
  *[Contributing](#Contributing)\n
  *[Test](#Test)\n
  *[Questions](#Questions)\n
  
  ## License
   This project is licensed under the 
   \n${response.licence}
  ## Insallation
   To install necessary dependencies run the following command: 
   \n${response.depend}
  ## Test
   To run tests, run the following command: 
   \n${response.testCommand}
  ## Usage
   Here are some steps for the user: 
   \n${response.needToknow}
  ## Contributing
   ${response.repoContr}
   
  ## Questions
  
  If you have any questions or concern please email me at: 
  ${response.email}
  or find my work on github
  [${response.username}](https://github.com/${response.username})
  `
}