const memberQuestions = [
    ,{   // Employee name
        type: "input",
        message: "What is the team member's name?",
        name: "memberName"
    }
    ,{   // Employee ID
        type: "input",
        message: "What is the team member's employee ID?",
        name: "emplId",
        validate: (input) => {
          if( Number.parseInt(input) > 0 ) return true;
          return "Please enter the employee's numeric ID.";
        }
    }
    ,{   // Email
        type: "input",
        message: "Team member's email address?",
        name: "qEmail",
        default: () => {},
        validate: (qEmail) => {
            if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(qEmail) ) return true;
            return " <-- Please enter a valid email";
        }
    }
    ,{   // Engineer / Intern ?
        type: "list",
        message: "Is the team member an Engineer or Intern?",
        name: "emplType",
        choices: [ "Engineer", "Intern" ]
    }
    ,{   // Engineer GitHub
        type: "input",
        message: "What office is the Engineer's GitHub login?",
        name: "gitHubLogin",
        when: (answer) => {
            answer.emplType === "Engineer"
        },
        validate: (input) => {
          if(input.length < 3 ) return "Please enter a valid GitHub login";
          else return true;
        }
    }
    ,{   // Intern School
        type: "input",
        message: "What is the intern's school?",
        name: "emplSchool",
        when: (answer) => {
            answer.emplType === "Engineer"
        }
  ];

  module.exports = memberQuestions;