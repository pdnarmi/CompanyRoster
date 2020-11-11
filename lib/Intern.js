const Employee = require('./Employee')


class Intern extends Employee {
    constructor (name, id, email, school){
        super(name, id, email);
        this.school = school;
    }

    get getSchool(){
        return this.school;
    }

    get getRole(){
        return 'Intern';
    }
}

module.exports = Intern;