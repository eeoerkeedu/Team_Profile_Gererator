class Employee {
    constructor(name, idNum, email) {
        this.name = name;
        this.idNum = idNum
        this.email = email
    }

    getName() {
        return this.name
    }

    getId(){
        return this.idNum
    }

    getEmail(){
        return this.email
    }

    getRole(){
        return 'Employee'
    }
}

module.exports = Employee