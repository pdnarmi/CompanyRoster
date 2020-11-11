const { it, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

describe("Manager class", ()=>{
    it("should create an object with a 'name', 'id', 'email', and 'officeNumber' property when called with the 'new' keyword", ()=>{

        const name = "Paul";
        const id = 1;
        const email = "gmail@gmail.com";
        const officeNumber = 2;

        const obj = new Manager(name, id, email, officeNumber);

        expect(obj.id).toEqual(id);
        expect(obj.name).toEqual(name);
        expect(obj.email).toEqual(email);
        expect(obj.officeNumber).toEqual(officeNumber);
    });
    it("should return the value of 'name' when getName() is invoked", ()=>{
        
        const name = "Paul";
        const id = 1;
        const email = "gmail@gmail.com";
        const officeNumber = 2;

        const obj = new Manager(name, id, email, officeNumber);
        
        expect(obj.getName).toEqual(name);
    });
    it("should return the value of 'role' when getRole() is invoked", ()=>{
        
        const name = "Paul";
        const id = 1;
        const email = "gmail@gmail.com";
        const officeNumber = 2;

        const obj = new Manager(name, id, email, officeNumber);
        
        expect(obj.getRole).toEqual('Manager');
    });
    it("should return the value of 'email' when getEmail() is invoked", ()=>{
        
        const name = "Paul";
        const id = 1;
        const email = "gmail@gmail.com";
        const officeNumber = 2;

        const obj = new Manager(name, id, email, officeNumber);
        
        expect(obj.getEmail).toEqual(email);
    });
    it("should return the value of 'officeNumber' when 'getOfficeNumber()' is invoked", ()=>{
        const name = "Paul";
        const id = 1;
        const email = "gmail@gmail.com";
        const officeNumber = 2;

        const obj = new Manager(name, id, email, officeNumber);

        expect(obj.getOfficeNumber).toEqual(officeNumber);
    })
})