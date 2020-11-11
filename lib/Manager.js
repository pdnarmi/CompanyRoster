const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    get getOfficeNumber(){
        return this.officeNumber;
    }

    get getRole(){
        return 'Manager';
    }
}

module.exports = Manager;
