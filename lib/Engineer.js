// Brings in the Employee constructor
const Employee = require("../lib/Employee");

//  Sub-Class construction for Engineer
class Engineer extends Employee {
	constructor(name, id, email, role, github, icon) {
		super(name, id, email, role);
		this.role = "Engineer";
		this.github = github;
		this.icon = `<i class="fa-brands fa-dev"></i>`;
	}
	getGithub() {
		return this.github;
	}
}

//exports the constructor for the other files
module.exports = Engineer;
