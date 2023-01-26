function getHtmlPage(teamName, managerCards, engineerCards, internCards) {
    return `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
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
