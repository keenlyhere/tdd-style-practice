const { expect } = require("chai");
const chai = require("chai");

const Person = require("../problems/person");

describe("person", function() {

    let david;
    let james;
    let coolPerson;

    beforeEach(() => {
        david = new Person("David", 32);
        james = new Person("James", 30);
        coolPerson = new Person("mai", 32);
    })

    describe("constructor", function() {

        it("should have a 'name' property", () => {
            expect(david).to.have.property("name");
        })

        it("should have an 'age' property", () => {
            expect(david).to.have.property("age");
        })

        it("should set the 'name' property when a new person is created.", () => {
            expect(david.name).to.equal("David");
        })

        it("should set the 'age' property when a new person is created.", () => {
            expect(david.age).to.equal(32);
        });

    });

    describe("sayHello", function() {
        it("should return a string of the Person instance's name and a greeting message.", () => {
            expect(david.sayHello(david, "Good morning, ")).to.equal(`Good morning, David`)
        });
    });

    describe("visit(otherPerson)", function() {

        it("should return a string stating this instance visited the passed-in person instance.", () => {
            expect(david.visit(james)).to.equal(`David visited James`);
        });
    })

    describe("switchVisit(otherPerson)", function() {
        it("should invoke the 'visit' function of the parameter, passing in the current instance as the argument.", () => {
            expect(david.switchVisit(james)).to.equal(`James visited David`);
        });
    })

    describe("update(obj)", function() {
        const string = "i am a string";
        const number = 5;
        it("should throw a TypeError with a clear message if the incoming argument is not an object.", () => {
            expect(() => update(number)).to.throw(Error)
        });

        it("should update the instance's properties to match the passed-in object's values if the incoming argument is an object.", () => {
            david.update(james);
            expect(david.name).to.equal("James");
            expect(david.age).to.equal(30);
        });

        it("should throw a TypeError if the incoming object does not have a 'name' and an 'age' property.", () => {
            expect(() => coolPerson.update({ age: 57 })).to.throw(Error);
        })
    })

    // describe("tryUpdate(obj)", function() {
    //     it("should call the update(obj) method with the incoming argument", () => {

    //     });

    //     it("should return true if the `update` was successful", () => {
    //         // let expectTrue = coolPerson.tryUpdate({ name: "lulu", age: 57 })
    //         expect(tryUpdate(() => coolPerson.tryUpdate({ name: "lulu", age: 57 }))).to.be.true;
    //     });

    //     it("should return false if `update` is not successfully invoked", () => {
    //         // let expectFalse = coolPerson.tryUpdate({ age: 57 })
    //         // console.log(expectFalse);
    //         expect(tryUpdate(coolPerson.tryUpdate({ age: 57 }))).to.be.false;
    //     })
    // })

    describe("greetAll", function() {
        it("should take in an array of Person instances", () => {
            
        });

        it("should call the sayHello() method on each Person instance", () => {

        });

        it("should store each returned string in an array", () => {

        });

        it("should return an array of the stored strings", () => {

        })
    })

})
