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
                
            }
        }
    ])
}