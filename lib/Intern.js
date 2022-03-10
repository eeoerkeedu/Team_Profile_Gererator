// Brings in the Employee constructor
const Employee = require("../lib/Employee");

// Sub-Class construction for Intern
class Intern extends Employee {
	constructor(name, id, email, role, school, icon) {
		super(name, id, email, role);
		this.role = "Intern";
		this.school = school;
		this.icon = `<i class="fa-solid fa-graduation-cap"></i>`;
	}
	getSchool() {
		return this.school;
	}
}

//exports the constructor for the other files
module.exports = Intern;
