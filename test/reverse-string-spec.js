const chai = require('chai');
const expect = chai.expect;

const reverseString = require('../problems/reverse-string');


describe('reverse-string', function() {

        it('should return the string reversed', function() {
            let input = 'fun';
            let inputReversed = reverseString(input);
            expect(inputReversed).to.equal('nuf');
    
        })
        
        it('should throw an error if input is not a string', function() {
            let error = new Error('Input must be a string')
            let number = 1;
            let object = { a: 1 };
            let array = [1];
            expect(() => reverseString(number)).to.throw(TypeError);
            expect(() => reverseString(object)).to.throw(TypeError);
            expect(() => reverseString(array)).to.throw(TypeError);
    
    })
})
    