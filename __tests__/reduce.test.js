import { expect } from 'chai';
import reduce from '../src/reduce.js';

describe('reduce', () => {
    it('should sum an array of numbers', () => {
        const result = reduce([1, 2, 3, 4], (sum, n) => sum + n, 0);
        expect(result).to.equal(10);
    });

    it('should multiply an array of numbers', () => {
        const result = reduce([1, 2, 3, 4], (product, n) => product * n, 1);
        expect(result).to.equal(24);
    });

    it('should handle an empty array with an initial value', () => {
        const result = reduce([], (sum, n) => sum + n, 10);
        expect(result).to.equal(10);
    });

    it('should handle an empty array without an initial value', () => {
        const result = reduce([], (sum, n) => sum + n);
        expect(result).to.equal(undefined);
    });

    it('should use the first element as the initial value if none is provided', () => {
        const result = reduce([5, 6, 7], (sum, n) => sum + n);
        expect(result).to.equal(18);
    });

    it('should reduce an object by key-value pairs', () => {
        const result = reduce(
            { a: 1, b: 2, c: 3 },
            (sum, value) => sum + value,
            0
        );
        expect(result).to.equal(6);
    });

    it('should group object keys by their values', () => {
        const result = reduce(
            { a: 1, b: 2, c: 1 },
            (acc, value, key) => {
                if (!acc[value]) acc[value] = [];
                acc[value].push(key);
                return acc;
            },
            {}
        );
        expect(result).to.deep.equal({ 1: ['a', 'c'], 2: ['b'] });
    });

    it('should return the initial value for a null or undefined collection', () => {
        expect(reduce(null, (sum, n) => sum + n, 10)).to.equal(10);
        expect(reduce(undefined, (sum, n) => sum + n, 10)).to.equal(10);
    });

    it('should handle strings as collections', () => {
        const result = reduce('hello', (acc, char) => acc + char, '');
        expect(result).to.equal('hello');
    });
});
