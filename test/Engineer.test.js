const Engineer = require("../lib/Engineer");

test("can set Github account via constructor arguments", () => {
	const github = "hubgit";
	const testEng = new Engineer("name", "id", "email", "role", github);
	expect(testEng.github).toBe(github);
});

test("get github should return github name", () => {
	const github = "hubgit";
	const testEng = new Engineer("name", "id", "email", "role", github);
	const getEl = testEng.getGithub();
	expect(getEl).toBe(github);
});

test("getRole should return 'Engineer'", () => {
	const testEng = new Engineer();
	const getEl = testEng.getRole();
	expect(getEl).toBe("Engineer");
});
