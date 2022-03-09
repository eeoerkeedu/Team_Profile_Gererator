const Employee = require("../lib/Employee");

class Manager extends Employee {
	constructor(name, id, email, role, office, icon) {
		super(name, id, email, role);
		this.role = "Manager";
		this.office = office;
		this.icon = '<i class="fa-solid fa-list-check"></i>';
	}
	getOffice() {
		return this.office;
	}
}

module.exports = Manager;
