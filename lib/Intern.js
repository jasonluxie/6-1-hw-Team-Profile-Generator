function Intern(name, id, email, school) {
    this.name = name
    this.id = id
    this.email = email
    this.school = school
    this.getRole() = () => {return 'Engineer'}
    this.getSchool() = () => {return this.school}
}

module.exports = Intern