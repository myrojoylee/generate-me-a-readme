// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "project_title",
    message: "What is the name of your project? ",
  },
  {
    type: "input",
    name: "project_description",
    message: "Please provide a description of your project: ",
  },
  {
    type: "input",
    name: "project_installation",
    message: "Please provide any installation instructions: ",
  },
  {
    type: "input",
    name: "project_usage",
    message: "Please provide any directions for usage: ",
  },
  {
    type: "input",
    name: "project_contribution_guidelines",
    message: "Please provide any guidelines for contributors: ",
  },
  {
    type: "input",
    name: "project_testing",
    message: "Please provide any instructions for testing:",
  },
  {
    type: "list",
    name: "project_license",
    message: "Please choice the license your project is under: ",
    choices: [
      "None",
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      `BSD 2-Clause "Simplified" License`,
      `BSD 3-Clause "Simplified" License`,
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    name: "project_author_username",
    message: "Please type your GitHub username (case-sensitive): ",
  },
  {
    type: "input",
    name: "project_author_email",
    message: "Please type your e-mail address (case-sensitive): ",
  },
];

inquirer
  .prompt(questions)
  .then((data) => writeToFile("sample_readme.md", data));

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// function consoleLogThisJawn(response) {
//   response.project_license;
// }

function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown.generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("done")
  );
}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
