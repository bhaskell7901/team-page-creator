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


// For testing large employee sets
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

var emplArr = [];
for(var i = 0; i < 1000; i++){
    emplArr.push(new Manager(generateString(12), 1000 + i, generateString(16), generateString(16)));
}

for(var i = 0; i < 1000; i++){
    emplArr.push(new Engineer(generateString(12), 2000 + i, generateString(16), generateString(16)));
}

for(var i = 0; i < 1000; i++){
    emplArr.push(new Intern(generateString(12), 3000 + i, generateString(16), generateString(16)));
}

const htmlCardPromises = emplArr.map((empl) => empl.getHtmlCard());

Promise.all(htmlCardPromises)
    .then( () =>{
        let managerCards = emplArr.filter((empl) => empl.getRole() === "Manager")
                                  .reduce((acc, mgr) => {return acc.concat(mgr.htmlCard)}, "");
        let engineerCards = emplArr.filter((empl) => empl.getRole() === "Engineer")
                                  .reduce((acc, eng) => {return acc.concat(eng.htmlCard)}, "");
        let internCards = emplArr.filter((empl) => empl.getRole() === "Intern")
                                  .reduce((acc, intrn) => {return acc.concat(intrn.htmlCard)}, "");
        let data = getHtmlPage("Team Name Here", managerCards, engineerCards, internCards);

        fs.writeFile("./dist/templates/team.html", data, done);
    })
    .catch((err) => console.log(err));


function done(){
    console.log("Program complete");
}
