const Employee = require('./Employee')

class Manager {
    constructor(office){
        this.office = office;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;