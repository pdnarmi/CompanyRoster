const { it, expect } = require('@jest/globals');
const Intern = require('../lib/Intern');

describe("Intern class", ()=>{
    it("should create an object with a 'name', 'id', 'email', and 'school' property when called with the 'new' keyword", ()=>{

        const name = "Paul";
        const id = 1;
        const email = "gmail@gmail.com";
        const school = "state";

        const obj = new Intern(name, id, email, school);

        expect(obj.id).toEqual(id);
        expect(obj.name).toEqual(name);
        expect(obj.email).toEqual(email);
        expect(obj.school).toEqual(school);
    });
    it("should return the value of 'name' when getName() is invoked", ()=>{
        
        const name = "Paul";
        const id = 1;
        const email = "gmail@gmail.com";
        const school = "state";

        const obj = new Intern(name, id, email, school);
        
        expect(obj.getName).toEqual(name);
    });
    it("should return the value of 'role' when getRole() is invoked", ()=>{
        
        const name = "Paul";
        const id = 1;
        const email = "gmail@gmail.com";
        const school = "state";

        const obj = new Intern(name, id, email, school);
        
        expect(obj.getRole).toEqual('Intern');
    });
    it("should return the value of 'email' when getEmail() is invoked", ()=>{
        
        const name = "Paul";
        const id = 1;
        const email = "gmail@gmail.com";
        const school = "state";

        const obj = new Intern(name, id, email, school);
        
        expect(obj.getEmail).toEqual(email);
    });
    it("should return the value of 'school' when 'getSchool()' is invoked", ()=>{
        const name = "Paul";
        const id = 1;
        const email = "gmail@gmail.com";
        const school = "state";

        const obj = new Intern(name, id, email, school);

        expect(obj.getSchool).toEqual(school);
    })
})