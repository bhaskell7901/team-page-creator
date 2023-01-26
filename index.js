const Employee = require('./lib/classes/Employee');
const Manager = require('./lib/classes/Manager');
const Engineer = require('./lib/classes/Engineer');
const Intern = require('./lib/classes/Intern');
const getHtmlPage = require('./dist/templates/html');

const fs = require('fs');
const questions = require('./lib/utils/questions');
const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer))

function getTeamAnswers(){

    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data);
        })
        .catch( (error) => {
            if( error.isTtyError ){
                console.log("Not availble in this environment");
            } else {
                console.log("Something crazy has happended!");
            }
        });
}

// getTeamAnswers();

test1 = new Manager("Brandon Haskell", 1001, "gmail@gmail.com", "30F");
test2 = new Engineer("Franklin Roosevelt", 1002, "frank@gmail.com", "bhaskell7901");
test3 = new Intern("Sarah Berryman", 1003, "saber@gmail.com", "Univerisyt of North Dakota");

console.log(getHtmlPage("Team Name Here", test1.getHtmlCard(), test2.getHtmlCard(), test3.getHtmlCard()));
