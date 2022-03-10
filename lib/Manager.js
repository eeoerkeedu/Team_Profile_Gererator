// Brings in the Employee constructor
const Employee = require("../lib/Employee");

//  Sub-Class construction for Manager
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

//exports the constructor for the other files
module.exports = Manager;
