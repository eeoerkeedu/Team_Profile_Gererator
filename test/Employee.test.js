const Employee = require('../lib/Employee');

test("can create an employee instance", () => {
    const testEmp = new Employee()
    
    expect(typeof(testEmp)).toBe("object")
})

test("can set name via constructor arguments", () => {
    const name = "Tim"
    const testEmp = new Employee(name)

    expect(testEmp.name).toBe(name)
})

test("can set ID via constructor arguments", () => {
    const idNum = 1
    const testEmp = new Employee("name" , idNum)
    expect(testEmp.idNum).toBe(idNum)
})

test("can set email via constructor arguments", () => {
    const email = "email@email.com"
    const testEmp = new Employee("name", "idNum", email)
    expect(testEmp.email).toBe(email)
})

test("can get name via getName()", () => {
    const name = "Tim"
    const testEmp = new Employee(name)
    const getEl = testEmp.getName()
    expect(getEl).toBe(name)
})

test("can get ID via getId()", () => {
    const idNum = 1
    const testEmp = new Employee("name", idNum)
    const getEl = testEmp.getId()
    expect(getEl).toBe(idNum)
})

test("can get email via getEmail()", () => {
    const email = "email@email.com"
    const testEmp = new Employee("name", "idNum", email)
    const getEl = testEmp.getEmail()
    expect(getEl).toBe(email)
})

test("get role should return 'Employee'", () => {
    const testEmp = new Employee()
    const getEl = testEmp.getRole()
    expect(getEl).toBe('Employee')
})