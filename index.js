//  Modules
const fs = require("fs");
const inquirer = require("inquirer");
// Link to HTML 
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');

const teamArray = [];

const createManager = () => {
    return inquirer.prompt([
        {
            type:'input',
            name:'name',
            message: 'What is the managers name ?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the manager's name!")
                    return false;
                }
            }
        },
        {
            type:'input',
            name:'id',
            message: "Please enter the manager's ID.",
            validate: nameInput => {
                if (isNaN(nameInput)){
                    console.log("Dont forget the manager's ID!")
                    return false;
                }else {
                    return true;
                }
            }
        },
        {
            type:'input',
            name: 'email',
            message: "Enter the manager's email address!",
            validate: email =>{
                valid = test(email)
                if(valid){
                    return true;
                } else {
                    console.log ('Enter your email.')
                    return false;
                }
                    
                
            }
        },
        {
            type:'input',
            name: 'officeNumber',
            message: "Enter the manager's office number",
            validate: nameInput => {
                if (isNaN(nameInput)){
                    console.log('Enter an office number!')
                    return false;
                } else {
                    return true;
                }
        }
         }])

.then(managerInput => {
    const  { name, id, email, officeNumber } = managerInput; 
    const manager = new Manager (name, id, email, officeNumber);

    teamArray.push(manager); 
    console.log(manager); 
})

};
const createEmployee = () => {
console.log(`
=================
Adding employees to the team
=================
`);

return inquirer.prompt ([
    {
        type: 'list',
        name: 'role',
        message: "Choose your employee's role",
        choices: ['Engineer', 'Intern']
    },
    {
        type: 'input',
        name: 'name',
        message: "What's the name of the employee?", 
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Enter an employee's name!");
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'id',
        message: "Enter the employee's ID.",
        validate: nameInput => {
            if  (isNaN(nameInput)) {
                console.log ("Enter the employee's ID!")
                return false; 
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter the employee's email.",
        validate: email => {
            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
            if (valid) {
                return true;
            } else {
                console.log ('Enter an email!')
                return false; 
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter the employee's github username.",
        when: (input) => input.role === "Engineer",
        validate: nameInput => {
            if (nameInput ) {
                return true;
            } else {
                console.log ("Enter the employee's github username!")
            }
        }
    },
    {
        type: 'input',
        name: 'school',
        message: "Please enter the intern's school",
        when: (input) => input.role === "Intern",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log ("Enter the intern's school!")
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add more team members?',
        default: false
    }
])
.then(employeeData => {
    // data for employee types 

    let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
    let employee; 

    if (role === "Engineer") {
        employee = new Engineer (name, id, email, github);

        console.log(employee);

    } else if (role === "Intern") {
        employee = new Intern (name, id, email, school);

        console.log(employee);
    }

    teamArray.push(employee); 

    if (confirmAddEmployee) {
        return createEmployee(teamArray); 
    } else {
        return teamArray;
    }
})

};



const writeFile = data => {
fs.writeFile('./dist/index.html', data, err => {
    // if there is an error 
    if (err) {
        console.log(err);
        return;
    // when the profile has been created 
    } else {
        console.log("Your team profile has been successfully created! Please check out the index.html")
    }
})
}; 

createManager()
.then(addEmployee)
.then(teamArray => {
return generateHTML(teamArray);
})
.then(pageHTML => {
return writeFile(pageHTML);
})
.catch(err => {
console.log(err);
});