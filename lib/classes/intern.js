const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, schoolName){
        super(name, id, email);
        this.role = "Intern";
        this.schoolName = schoolName;
    }

    getSchool(){
        return this.schoolName;
    }
}

module.exports = Intern;