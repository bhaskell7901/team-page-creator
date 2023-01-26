function getEmployeeCardColorClass(employee){
    // Manager type
    if(typeof employee === "Manager" ){
        return "primary";
    }
    // Engineer type
    if(typeof employee === "Engineer" ){
        return "danger";
    }
    // Intern type
    if(typeof employee === "Intern" ){
        return "warning";
    }
    return "";
}

function getEmployeeCardIconColorClass(employee){
    // Manager type
    if(typeof employee === "Manager" ){
        return "#6495ED";
    }
    // Engineer type
    if(typeof employee === "Engineer" ){
        return "#C5929D";
    }
    // Intern type
    if(typeof employee === "Intern" ){
        return "#8C8347";
    }
    return Error("Invalid employee type!");
}

function getEmployeeIconClass(employee){
    // Manager type
    if(typeof employee === "Manager" ){
        return "people-fill";
    }
    // Engineer type
    if(typeof employee === "Engineer" ){
        return "server";
    }
    // Intern type
    if(typeof employee === "Intern" ){
        return "person-lines-fill";
    }
    return Error("Invalid employee type!");
}

function getEmployeeHtmlDataList(employee){
    var str = `<li class="list-group-item"><em>ID: </em>${employee.emplId}</li>
    <li class="list-group-item"><em>Email: </em><a href="mailto:${employee.emplEmail}">${employee.emplEmail}</a></li>`;
    
    // Manager type
    if(typeof employee === "Manager" ){
        return str += `<li class="list-group-item"><em>Office: </em>${employee.officeNum}</li>`;
    }
    // Engineer type
    if(typeof employee === "Engineer" ){
        return str += `<li class="list-group-item"><em>GitHub: </em><a href="https://github.com/${employee.gitHubLogin}" >${employee.gitHubLogin}</a></li>`;
    }
    // Intern type
    if(typeof employee === "Intern" ){
        return str += `<li class="list-group-item"><em>School: </em>${employee.schoolName}</li>`;
    }
    return Error("Invalid employee type!");
}


function getHtmlCard(employee){
    return `<div class="card border-${getEmployeeCardColorClass(employee)} text-bg-${getEmployeeCardColorClass(employee)} col-2 align-self-center" style="width: 18rem; margin: 10px;">
    <div class="card-body">
        <h5 class="card-title">${employee.name}</h5>
        <div class="container">
            <div class="row align-items-end">
                <i class="bi-${getEmployeeCardIconColorClass(employee)} col-sm-2" style="font-size: 1.5rem; color: ${getEmployeeCardIconColorClass(employee)};"></i>
                <h6 class="card-title col-auto"><em>${employee.getRole()}</em></h6>
            </div>
        </div>
    </div>
    <ul class="list-group list-group-flush">
        ${getEmployeeHtmlDataList(employee)}
    </ul>
</div>`;
}

module.exports = getHtmlCard;