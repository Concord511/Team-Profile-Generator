function generateHTML(employees) {
    let empCards = ``;
    employees.forEach(member => {
        let name = member.name;
        let id = member.id;
        let email = member.email;
        let role = member.getRole();
        let roleFeature;        
        if (role === 'Manager') {
            roleFeature = "Office Number: " + member.officeNumber;
        }
        else if (role === 'Engineer') {
            roleFeature = 'GitHub Username: <a href="https://www.github.com/' + member.github + '" target="blank">' + member.github + '</a>';
        }
        else if (role === 'Intern') {
            roleFeature = "School: " + member.school;
        }
        empCards = empCards + `<div class="member-card">
            <div class="member-header">
                <span class="member-name">${name}</span>
                <span class="member-role">${role}</span>
            </div>
            <div class="member-fields">
                <span class="member-field">Employee ID: ${id}</span>
                <span class="member-field">Email: <a href="mailto:${email}">${email}</a></span>
                <span class="member-field">${roleFeature}</span>
            </div>
        </div>
        `
    });
    const teamText = `<div class="team-container" id="team-container">
        ${empCards}
    </div>
    `;
    const htmlText = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles.css">
    <title>Team Profile</title>
</head>
<body>
    <header>Team Profile</header>
    
    <main>
        ${teamText}
    </main>
</body>
</html>
`
    return htmlText;
}

module.exports = generateHTML;