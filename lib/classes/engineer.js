const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, gitHubLogin){
        super(name, id, email);
        this.role = "Engineer"
        this.gitHubLogin = gitHubLogin;
    }

    getGitHubLogin(){
        return this.gitHubLogin;
    }
}

module.exports = Engineer;