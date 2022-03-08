class Manager {
    constructor(office) {
        this.office = office;
    }
    getOffice(){
        return this.office
    }
    getRole(){
        return 'Manager'
    }
}

module.exports = Manager