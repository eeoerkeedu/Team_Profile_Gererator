const Employee = require("../lib/Employee");

class Manager extends Employee {
	constructor(name, id, email, role, office) {
		super(name, id, email, role);
		this.role = "Manager";
		this.office = office;
	}
	getOffice() {
		return this.office;
	}
}

module.exports = Manager;
