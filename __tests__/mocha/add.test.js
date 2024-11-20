import { expect } from 'chai';
import add from '../../src/add.js';

describe('add', () => {
    it('should add two positive numbers', () => {
        const result = add(6, 4);
        expect(result).to.equal(10);
    });

    it('should add negative numbers', () => {
        const result = add(-3, -7);
        expect(result).to.equal(-10);
    });

    it('should add a positive and a negative number', () => {
        const result = add(5, -3);
        expect(result).to.equal(2);
    });

    it('should add a number and zero', () => {
        const result = add(7, 0);
        expect(result).to.equal(7);
    });

    it('should handle undefined arguments', () => {
        const result1 = add(undefined, 5);
        const result2 = add(5, undefined);
        const result3 = add(undefined, undefined);
        expect(result1).to.equal(5);
        expect(result2).to.equal(5);
        expect(result3).to.equal(0);
    });

    it('should concatenate strings when either argument is a string', () => {
        const result1 = add('6', 4);
        const result2 = add(6, '4');
        expect(result1).to.equal('64');
        expect(result2).to.equal('64');
    });

    it('should handle non-numeric values gracefully', () => {
        const result = add('a', 3);
        expect(result).to.equal('a3');
    });
});
