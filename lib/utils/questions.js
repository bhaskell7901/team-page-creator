questions = [
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
        name: "name",
        validate: (input) => {
          if(input.length < 2) return "Please enter a meaningful description.";
          else return true;
        }
    }
    ,{   // Manager ID
        type: "input",
        message: "What is the manager's employee ID?",
        name: "id",
        validate: (input) => {
          if( Number.parseInt(input) > 0 ) return true;
          return "Please enter the employee's numeric ID.";
        }
    }
    ,{   // Manager Email
        type: "input",
        message: "Manager's email address?",
        name: "email",
        default: () => {},
        validate: (qEmail) => {
            if ( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(qEmail) ) return true;
            return " <-- Please enter a valid email";
        }
    }
    ,{   // Office
        type: "input",
        message: "What office is the manager in?",
        name: "officeNumber",
        validate: (input) => {
          if(input.length < 1 ) return "Please enter an office number";
          else return true;
        }
    }
    ,{  // Employees under manger
        type: "loop",
        name: "employees",
        message: "Add employees?",
        questions: [
            {   // Employee name
                type: "input",
                message: "What is the team member's name?",
                name: "name"
            }
            ,{   // Employee ID
                type: "input",
                message: "What is the team member's employee ID?",
                name: "id",
                validate: (input) => {
                  if( Number.parseInt(input) > 0 ) return true;
                  return "Please enter the employee's numeric ID.";
                }
            }
            ,{   // Email
                type: "input",
                message: "Team member's email address?",
                name: "email",
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
                name: "gitHub",
                when: (answer) => answer.emplType === "Engineer",
                validate: (input) => {
                  if(input.length < 3 ) return "Please enter a valid GitHub login";
                  else return true;
                }
            }
            ,{   // Intern School
                type: "input",
                message: "What is the intern's school?",
                name: "school",
                when: (answer) => answer.emplType === "Intern"
            }
        ]
    }
]
 module.exports = questions;