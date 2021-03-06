const Employee = require("./Employee");


class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calling employee constructor 
        super (name, id, email);
        this.role = "Engineer";
        this.github = github; 
    }

    
    getGithub () {
        return this.github;
    }

  
    getRole () {
        return "Engineer";
    }
}


module.exports = Engineer; 