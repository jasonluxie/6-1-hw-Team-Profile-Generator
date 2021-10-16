const Employee = require("./Employee");

// function Manager(name, id, email, officeNumber) {
//     this.name = name
//     this.id = id
//     this.email = email
//     this.officeNumber = officeNumber
//     this.getRole() = () => {return 'Employee'}
//     this.getOffice() = () => {return this.officeNumber}
// }

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager'
    }
}

module.exports = Manager;
