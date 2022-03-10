// Class construction for Employee
class Employee {
	constructor(name, idNum, email, role = "Employee") {
		this.name = name;
		this.idNum = idNum;
		this.email = email;
		this.role = role;
	}

	getName() {
		return this.name;
	}

	getId() {
		return this.idNum;
	}

	getEmail() {
		return this.email;
	}

	getRole() {
		return this.role;
	}

	//creates the HTML cards for the page
	generateHTMLCard(other) {
		return `
			<div class="card col-12 col-md-6 col-lg-4">
				<div class="card-header">
					${this.name}
				</div>
				<ul class="list-group">
					<li class="list-group-item">${this.icon}  ${this.role}</li>
					<li class="list-group-item">${this.idNum}</li>
					<li class="list-group-item">${this.email}</li>
					<li class="list-group-item">${other}</li>
				</ul>
			</div>
        `;
	}
}

//exports the constructor for the other files
module.exports = Employee;
