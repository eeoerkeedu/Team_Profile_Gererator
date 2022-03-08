const Engineer = require('../lib/Engineer');

test("can set Github account via constructor arguments", () => {
    const github = "hubgit"
    const testEng = new Engineer(github)
    expect(testEng.github).toBe(github)
})

test("get role should return 'Employee'", () => {
    const github = "hubgit"
    const testEng = new Engineer(github)
    const getEl = testEng.getGithub()
    expect(getEl).toBe(github)
})

test("get role should return 'Engineer'", () => {
    const testEng = new Engineer()
    const getEl = testEng.getRole()
    expect(getEl).toBe('Engineer')
})