const { it, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer');

describe("Engineer class", ()=>{
    it("should create an object with a 'name', 'id', 'email', and 'gitHub' property when called with the 'new' keyword", ()=>{

        const name = "Paul";
        const id = 1;
        const email = "gmail@gmail.com";
        const gitHub = "paulGitHub";

        const obj = new Engineer(name, id, email, gitHub);

        expect(obj.id).toEqual(id);
        expect(obj.name).toEqual(name);
        expect(obj.email).toEqual(email);
        expect(obj.gitHub).toEqual(gitHub);
    });
    it("should return the value of 'name' when getName() is invoked", ()=>{
        
        const name = "Paul";
        const id = 1;
        const email = "gmail@gmail.com";
        const gitHub = "paulGitHub";

        const obj = new Engineer(name, id, email, gitHub);
        
        expect(obj.getName).toEqual(name);
    });
    it("should return the value of 'role' when getRole() is invoked", ()=>{
        
        const name = "Paul";
        const id = 1;
        const email = "gmail@gmail.com";
        const gitHub = "paulGitHub";

        const obj = new Engineer(name, id, email, gitHub);
        
        expect(obj.getRole).toEqual('Engineer');
    });
    it("should return the value of 'email' when getEmail() is invoked", ()=>{
        
        const name = "Paul";
        const id = 1;
        const email = "gmail@gmail.com";
        const gitHub = "paulGitHub";

        const obj = new Engineer(name, id, email, gitHub);
        
        expect(obj.getEmail).toEqual(email);
    });
    it("should return the value of 'gitHub' when 'getGitHub()' is invoked", ()=>{
        const name = "Paul";
        const id = 1;
        const email = "gmail@gmail.com";
        const gitHub = "paulGitHub";

        const obj = new Engineer(name, id, email, gitHub);

        expect(obj.getGitHub).toEqual(gitHub);
    })
})