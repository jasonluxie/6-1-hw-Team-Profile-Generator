// function Engineer(name, id, email, github) {
//     this.name = name
//     this.id = id
//     this.email = email
//     this.github = github
//     this.getRole() = () => {return 'Engineer'}
//     this.getGithub() = () => {return this.github}
// }
const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github){
    super(name, id, email);
    this.github = github
}
getGithub() {
    return this.github
}
getRole() {
    return 'Engineer'
}
}

module.exports = Engineer