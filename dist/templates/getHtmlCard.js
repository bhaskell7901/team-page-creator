const Employee = require(".../lib/classes/Employee");

function getEmployeeCardColorClass(){
    const type = this.getRole();
    
    // Manager type
    if(type === "Manager" ){
        return "primary";
    }
    // Engineer type
    if(type === "Engineer" ){
        return "danger";
    }
    // Intern type
    if(type === "Intern" ){
        return "warning";
    }
    return "";
}

function getEmployeeCardIconColorClass(){
    const type = this.getRole();

    // Manager type
    if(type === "Manager" ){
        return "#6495ED";
    }
    // Engineer type
    if(type === "Engineer" ){
        return "#C5929D";
    }
    // Intern type
    if(type === "Intern" ){
        return "#8C8347";
    }
    return Error("Invalid employee type!");
}

function getEmployeeIconClass(){
    const type = this.getRole();
    
    // Manager type
    if(type === "Manager" ){
        return "people-fill";
    }
    // Engineer type
    if(type === "Engineer" ){
        return "server";
    }
    // Intern type
    if(type === "Intern" ){
        return "person-lines-fill";
    }
    return Error("Invalid employee type!");
}

function getEmployeeHtmlDataList(){
    const type = this.getRole();
    var str = `<li class="list-group-item"><em>ID: </em>${this.emplId}</li>
    <li class="list-group-item"><em>Email: </em><a href="mailto:${this.emplEmail}">${this.emplEmail}</a></li>`;
    
    // Manager type
    if(type === "Manager" ){
        return str += `<li class="list-group-item"><em>Office: </em>${this.officeNum}</li>`;
    }
    // Engineer type
    if(type === "Engineer" ){
        return str += `<li class="list-group-item"><em>GitHub: </em><a href="https://github.com/${this.gitHubLogin}" >${employee.gitHubLogin}</a></li>`;
    }
    // Intern type
    if(type === "Intern" ){
        return str += `<li class="list-group-item"><em>School: </em>${this.schoolName}</li>`;
    }
    return Error("Invalid employee type!");
}


Employee.prototype.getHtmlCard = function() {
    return `<div class="card border-${getEmployeeCardColorClass()} text-bg-${getEmployeeCardColorClass()} col-2 align-self-center" style="width: 18rem; margin: 10px;">
    <div class="card-body">
        <h5 class="card-title">${this.name}</h5>
        <div class="container">
            <div class="row align-items-end">
                <i class="bi-${getEmployeeIconClass()} col-sm-2" style="font-size: 1.5rem; color: ${getEmployeeCardIconColorClass()};"></i>
                <h6 class="card-title col-auto"><em>${this.getRole()}</em></h6>
            </div>
        </div>
    </div>
    <ul class="list-group list-group-flush">
        ${getEmployeeHtmlDataList()}
    </ul>
</div>`;
}

module.exports = getHtmlCard;