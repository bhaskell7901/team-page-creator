const managerQuestions = [
    {   // Team name
        type: "input",
        message: "What is the team name?",
        name: "teamName",
        validate: (input) => {
          if(input.length < 5) return "Please enter a meaningful description.";
          else return true;
        }
    }
    ,{   // Manager name
        type: "input",
        message: "What is the managers name?",
        name: "mgrName",
        validate: (input) => {
          if(input.length < 2) return "Please enter a meaningful description.";
          else return true;
        }
    }
    ,{   // Employee ID
        type: "input",
        message: "What is the manager's employee ID?",
        name: "emplId",
        validate: (input) => {
          if( Number.parseInt(input) > 0 ) return true;
          return "Please enter the employee's numeric ID.";
        }
    }
    ,{   // Email
        type: "input",
        message: "Manager's email address?",
        name: "qEmail",
        default: () => {},
        validate: (qEmail) => {
            if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(qEmail) ) return true;
            return " <-- Please enter a valid email";
        }
    }
    ,{   // Room
        type: "input",
        message: "What office is the manager in?",
        name: "usageDesc",
        validate: (input) => {
          if(input.length < 1 ) return "Please enter an office number";
          else return true;
        }
    }
  ];

  module.exports = managerQuestions;