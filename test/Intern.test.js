// Brings in the Intern constructor to test
const Intern = require("../lib/Intern");

// checks being able to set a school for the Int class
test("can set school via constructor arguments", () => {
	const school = "Versaillies";
	const testInt = new Intern("name", "id", "email", "role", school);
	expect(testInt.school).toBe(school);
});

// checks functionality of getSchool Int class
test("get school should return school name", () => {
	const school = "Versaillies";
	const testInt = new Intern("name", "id", "email", "role", school);
	const getEl = testInt.getSchool();
	expect(getEl).toBe(school);
});

// checks functionality of getRole from the EE class on the Int
test("get role should return 'Intern'", () => {
	const testInt = new Intern();
	const getEl = testInt.getRole();
	expect(getEl).toBe("Intern");
});
