const { it, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

describe("Employee class", ()=>{
    it("should create an object with a 'name', 'id', and 'email' property when called with the 'new' keyword", ()=>{

        const name = "Paul";
        const id = 1;
        const email = "gmail@gmail.com"

        const obj = new Employee(name, id, email);

        expect(obj.id).toEqual(id);
        expect(obj.name).toEqual(name);
        expect(obj.email).toEqual(email);
    });
    it("should return the value of 'name' when getName() is invoked", ()=>{
        
        const name = "Paul";
        const id = 1;
        const email = "gmail@gmail.com"

        const obj = new Employee(name, id, email);
        
        expect(obj.getName).toEqual(name);
    });
    it("should return the value of 'role' when getRole() is invoked", ()=>{
        
        const name = "Paul";
        const id = 1;
        const email = "gmail@gmail.com"

        const obj = new Employee(name, id, email);
        
        expect(obj.getRole).toEqual('Employee');
    });
    it("should return the value of 'email' when getEmail() is invoked", ()=>{
        
        const name = "Paul";
        const id = 1;
        const email = "gmail@gmail.com"

        const obj = new Employee(name, id, email);
        
        expect(obj.getEmail).toEqual(email);
    });
})