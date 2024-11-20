import divide from '../../src/divide.js';

describe('divide', () => {
    test('divides two positive numbers', () => {
        expect(divide(6, 4)).toBe(1.5);
    });

    test('divides a positive number by a negative number', () => {
        expect(divide(6, -3)).toBe(-2);
    });

    test('handles division by zero', () => {
        expect(divide(6, 0)).toBe(Infinity);
    });

    test('handles zero as the numerator', () => {
        expect(divide(0, 5)).toBe(0);
    });
});