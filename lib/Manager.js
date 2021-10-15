// const employeeMod = require('../lib/Employee')

function Manager(name, id, email, officeNumber) {
    this.name = name
    this.id = id
    this.email = email
    this.officeNumber = officeNumber
    this.getRole() = () => {return 'Employee'}
    this.getOffice() = () => {return this.officeNumber}
}

// Can I import a constructor and add a prototype to it while renaming the constructor?

module.exports = Manager