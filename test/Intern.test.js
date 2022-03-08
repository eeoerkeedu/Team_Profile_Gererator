const Intern = require('../lib/Intern');

test("can set school via constructor arguments", () => {
    const school = "Versaillies"
    const testInt = new Intern(school)
    expect(testInt.school).toBe(school)
})

test("get role should return 'Employee'", () => {
    const school = "Versaillies"
    const testInt = new Intern(school)
    const getEl = testInt.getSchool()
    expect(getEl).toBe(school)
})

test("get role should return 'Intern'", () => {
    const testInt = new Intern()
    const getEl = testInt.getRole()
    expect(getEl).toBe('Intern')
})