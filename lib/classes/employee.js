class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    
    getName(){
        return this.name;
    }

    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return this.role;
    }
}

Employee.prototype.getHtmlCard = function() {
    new Promise((cardReturn, reject) => {
        const type = this.getRole();
        var employeeCardColorClass = "";
        var employeeCardIconColorClass = "";
        var employeeIconClass = "";
        var employeeHtmlDataList = `<li class="list-group-item"><em>ID: </em>${this.id}</li>
        <li class="list-group-item"><em>Email: </em><a href="mailto:${this.email}">${this.email}</a></li>`;
        

        // Manager
        if( type === "Manager" ){
            employeeCardColorClass = "primary";
            employeeCardIconColorClass = "#6495ED";
            employeeIconClass = "people-fill";
            employeeHtmlDataList += `<li class="list-group-item"><em>Office: </em>${this.officeNum}</li>`;
        }
        else if(type === "Engineer" ){
            employeeCardColorClass = "danger";
            employeeCardIconColorClass = "#C5929D";
            employeeIconClass = "server";
            employeeHtmlDataList += `<li class="list-group-item"><em>GitHub: </em><a href="https://github.com/${this.gitHubLogin}" >${this.gitHubLogin}</a></li>`;
        }
        else if(type === "Intern" ){
            employeeCardColorClass = "warning";
            employeeCardIconColorClass = "#8C8347";
            employeeIconClass = "person-lines-fill";
            employeeHtmlDataList += `<li class="list-group-item"><em>School: </em>${this.schoolName}</li>`;
        }
        else {
            reject(new Error("Invalid employee type!"));
        }
        
        this.htmlCard = `<div class="card border-${employeeCardColorClass} text-bg-${employeeCardColorClass} col-2 align-self-center" style="width: 18rem; margin: 10px;">
            <div class="card-body">
                <h5 class="card-title">${this.name}</h5>
                <div class="container">
                    <div class="row align-items-end">
                        <i class="bi-${employeeIconClass} col-sm-2" style="font-size: 1.5rem; color: ${employeeCardIconColorClass};"></i>
                        <h6 class="card-title col-auto"><em>${type}</em></h6>
                    </div>
                </div>
            </div>
            <ul class="list-group list-group-flush">
                ${employeeHtmlDataList}
            </ul>
        </div>`;
        cardReturn(true);
    });
}

module.exports = Employee;