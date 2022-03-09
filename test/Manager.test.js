const Manager = require("../lib/Manager");

test("can set office via constructor arguments", () => {
	const office = 1;
	const testMng = new Manager("name", "id", "email", "role", office);
	expect(testMng.office).toBe(office);
});

test("get office should return office #", () => {
	const office = 1;
	const testMng = new Manager("name", "id", "email", "role", office);
	const getEl = testMng.getOffice();
	expect(getEl).toBe(office);
});

test("get role should return 'Manager'", () => {
	const testMng = new Manager();
	const getEl = testMng.getRole();
	expect(getEl).toBe("Manager");
});
