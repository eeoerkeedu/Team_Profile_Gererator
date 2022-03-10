// Brings in the Employee constructor to test
const Employee = require("../lib/Employee");

//checks the creation of a new EE
test("can create an employee instance", () => {
	const testEmp = new Employee();

	expect(typeof testEmp).toBe("object");
});

// checks being able to set a name for the EE class
test("can set name via constructor arguments", () => {
	const name = "Tim";
	const testEmp = new Employee(name);

	expect(testEmp.name).toBe(name);
});

// checks being able to set an ID for the EE class
test("can set ID via constructor arguments", () => {
	const idNum = 1;
	const testEmp = new Employee("name", idNum);
	expect(testEmp.idNum).toBe(idNum);
});

// checks being able to set an email for the EE class
test("can set email via constructor arguments", () => {
	const email = "email@email.com";
	const testEmp = new Employee("name", "idNum", email);
	expect(testEmp.email).toBe(email);
});

// checks functionality of getName EE class
test("can get name via getName()", () => {
	const name = "Tim";
	const testEmp = new Employee(name);
	const getEl = testEmp.getName();
	expect(getEl).toBe(name);
});

// checks functionality of getId EE class
test("can get ID via getId()", () => {
	const idNum = 1;
	const testEmp = new Employee("name", idNum);
	const getEl = testEmp.getId();
	expect(getEl).toBe(idNum);
});

// checks functionality of getEmail EE class
test("can get email via getEmail()", () => {
	const email = "email@email.com";
	const testEmp = new Employee("name", "idNum", email);
	const getEl = testEmp.getEmail();
	expect(getEl).toBe(email);
});

// checks functionality of getRole EE class
test("get role should return 'Employee'", () => {
	const testEmp = new Employee();
	const getEl = testEmp.getRole();
	expect(getEl).toBe("Employee");
});
