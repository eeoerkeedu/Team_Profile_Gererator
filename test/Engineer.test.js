// Brings in the Engineer constructor to test
const Engineer = require("../lib/Engineer");

// checks being able to set a github for the Eng class
test("can set Github account via constructor arguments", () => {
	const github = "hubgit";
	const testEng = new Engineer("name", "id", "email", "role", github);
	expect(testEng.github).toBe(github);
});

// checks functionality of getGithub Eng class
test("get github should return github name", () => {
	const github = "hubgit";
	const testEng = new Engineer("name", "id", "email", "role", github);
	const getEl = testEng.getGithub();
	expect(getEl).toBe(github);
});

// checks functionality of getRole from the EE class on the Eng
test("getRole should return 'Engineer'", () => {
	const testEng = new Engineer();
	const getEl = testEng.getRole();
	expect(getEl).toBe("Engineer");
});
