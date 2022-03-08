const Manager = require('../lib/Manager');

test("can set office via constructor arguments", () => {
    const office = 1
    const testMng = new Manager(office)
    expect(testMng.office).toBe(office)
})

test("get role should return 'Employee'", () => {
    const office = "Versaillies"
    const testMng = new Manager(office)
    const getEl = testMng.getOffice()
    expect(getEl).toBe(office)
})

test("get role should return 'Manager'", () => {
    const testMng = new Manager()
    const getEl = testMng.getRole()
    expect(getEl).toBe('Manager')
})