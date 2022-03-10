// Brings in the Manager constructor to test
const Manager = require("../lib/Manager");

// checks being able to set an office number for the Mng class
test("can set office via constructor arguments", () => {
	const office = 1;
	const testMng = new Manager("name", "id", "email", "role", office);
	expect(testMng.office).toBe(office);
});

// checks functionality of getOffice Mng class
test("get office should return office #", () => {
	const office = 1;
	const testMng = new Manager("name", "id", "email", "role", office);
	const getEl = testMng.getOffice();
	expect(getEl).toBe(office);
});

// checks functionality of getRole from the EE class on the Mng
test("get role should return 'Manager'", () => {
	const testMng = new Manager();
	const getEl = testMng.getRole();
	expect(getEl).toBe("Manager");
});
