function getHtmlCard(employee: Employee){
    var colorValue = "";
    var iconColor = "";
}

function getEmployeeCardColorClass(employee: Employee){
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

function getEmployeeCardIconColorClass(employee: Employee){
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

function getEmployeeIconClass(employee: Employee){
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

function getEmployeeHtmlDataList(employee: Employee){
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


function getHtmlCard(employee: Employee){
    return `<div class="card border-${getEmployeeCardColorClass(employee)} text-bg-${getEmployeeCardColorClass(employee)} col-2 align-self-center" style="width: 18rem; margin: 10px;">
    <div class="card-body">
        <h5 class="card-title">${employee.name}</h5>
        <div class="container">
            <div class="row align-items-end">
                <i class="bi-${getEmployeeCardIconColorClass(employee)} col-sm-2" style="font-size: 1.5rem; color: ${getEmployeeCardIconColorClass(employee)};"></i>
                <h6 class="card-title col-auto"><em>${typeof employee}</em></h6>
            </div>
        </div>
    </div>
    <ul class="list-group list-group-flush">
        ${getEmployeeHtmlDataList(employee)}
    </ul>
</div>`;
}

function getHtmlPage(team: Team) {
    // TODO: add filter functions to get manager/engineer/intern cards

    // var managerCards = getHtmlCard(team.employeeList.filter...);
    // var engineerCards = getHtmlCard(team.employeeList.filter...);
    // var internCards = getHtmlCard(team.employeeList.filter...);

    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        <title>${team.teamName}</title>
        <style type="text/css"></style>
    </head>
    <body style="background-color: #dfdfdf;">
        <header>
            <h1 class="display-1 fw-bold text-center text-bg-dark">Team One</h1>
        </header>
        <main id="container" class="container-sm">
            <div id="manager" class="row align-items-center">
            
            <!-- Begin Manager list -->
                ${managerCards}
            <!-- End Manager list -->

            </div>
            <div id="engineer" class="row align-items-center">
            
            <!-- Begin Engineer list -->
                ${engineerCards}
            <!-- End Engineer list --></div>
            
            <div id="intern" class="row align-items-center">

            <!-- Begin Intern list -->
                ${internCards}
            <!-- End Intern list --></div>

            </div>
                    </main>
    </body>
</html>`;
}
