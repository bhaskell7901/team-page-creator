
const Manager = require('./lib/classes/Manager');
const Engineer = require('./lib/classes/Engineer');
const Intern = require('./lib/classes/Intern');

const fs = require('fs');
const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer))

function getTeamAnswers(){

    inquirer
        .prompt()
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

getTeamAnswers();