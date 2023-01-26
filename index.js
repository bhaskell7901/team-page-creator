const inquirer = require('inquirer');
const managerQuestions = require('./src/questionairres/managerQuestions');


var qArray = [];
function getTeamAnswers(){

    inquirer
        .prompt(managerQuestions)
        .then((answers) => {
            qArray.push(answers);
            console.log(qArray);
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