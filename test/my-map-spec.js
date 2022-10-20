const { expect } = require("chai");
const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);

const myMap = require("../problems/my-map");




describe("myMap", function() {

    let array;

    beforeEach(() => {
        array = new Array(1, 2, 3)
    });
    it("should mimic the built-in Array.map", function() {
        let result1 = myMap(array, (el) => el *= 2);
        expect(result1).to.eql([2, 4, 6]);

        let result2 = myMap([100, 25, 81, 64], Math.sqrt);
        expect(result2).to.eql([10, 5, 9, 8]);
    })

    it("should not mutate the passed-in array argument", function() {
        expect(array).to.eql([1, 2, 3]);
    });

    it("should not call the built-in Array.map", function() {
        const mapSpy = chai.spy.on(Array.prototype, "map");
        myMap(array, (el) => el *= 2);
        expect(mapSpy).to.have.not.been.called();
    });

    it("should invoke the passed-in callback once for each element in the passed-in array argument")
        // let cb = (el) => el *= 2;
        let spy = chai.spy((el) => el *= 2)
        myMap([1, 2, 3], spy)
        expect(spy).to.have.been.called()


});
