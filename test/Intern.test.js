const Intern = require("../lib/Intern");

test("can set school via constructor arguments", () => {
	const school = "Versaillies";
	const testInt = new Intern("name", "id", "email", "role", school);
	expect(testInt.school).toBe(school);
});

test("get school should return school name", () => {
	const school = "Versaillies";
	const testInt = new Intern("name", "id", "email", "role", school);
	const getEl = testInt.getSchool();
	expect(getEl).toBe(school);
});

test("get role should return 'Intern'", () => {
	const testInt = new Intern();
	const getEl = testInt.getRole();
	expect(getEl).toBe("Intern");
});
