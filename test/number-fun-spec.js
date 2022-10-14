const { expect } = require('chai');
const chai = require('chai');
const express = chai.express;

const { returnsThree, reciprocal } = require('../problems/number-fun');

describe('returnsThree', function() {
    it('should return the number 3', function() {
        expect(returnsThree()).to.eq(3);
    })
})

describe("reciprocal()", () => {
    context("valid arguments", () => {
      it("should return the reciprocal", () => {
        expect(reciprocal(4)).to.eq(0.25);
        expect(reciprocal(1)).to.eq(1);
        expect(reciprocal(999999)).to.eq(0.000001000001000001);
      });
    });
  
    context("invalid arguments", () => {
      it("should throw an exception when passed a number less than one", () => {
        expect(() => reciprocal(0)).to.throw(TypeError);
        expect(() => reciprocal(-1)).to.throw(TypeError);
      });
  
      it("should throw an exception when passed a number greater than 1 million", () => {
        expect(() => reciprocal(1000001)).to.throw(TypeError);
      });
    });
  });
