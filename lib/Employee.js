// function Employee(name, id, email) {
//     this.name = name
//     this.id = id
//     this.email = email
//     this.getName() = () => {return this.name}
//     this.getID() = () => {return this.id}
//     this.getEmail() = () => {return this.email}
//     this.getRole() = () => {return 'Employee'}
// }


class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email= email
    }
    getName() {
        return this.name
    }
    getID() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return 'Employee'
    }
}
    module.exports = Employee

    const employee = new Employee("Jason", 1, 'jasonluxie@gmail.com')
    console.log(employee)