function Engineer(name, id, email, github) {
    this.name = name
    this.id = id
    this.email = email
    this.github = github
    this.getRole() = () => {return 'Engineer'}
    this.getGithub() = () => {return this.github}
}

module.exports = Engineer