import ceil from '../src/ceil.js';

describe('ceil', () => {
    test('rounds up to the nearest integer', () => {
        expect(ceil(4.006)).toBe(5);
        expect(ceil(7.1)).toBe(8);
        expect(ceil(-4.1)).toBe(-4);
    });

    test('rounds up to a specific precision', () => {
        expect(ceil(6.004, 2)).toBe(6.01);
        expect(ceil(0.12345, 4)).toBe(0.1235);
    });

    test('rounds up with negative precision', () => {
        expect(ceil(6040, -2)).toBe(6100);
        expect(ceil(1234, -3)).toBe(2000);
    });

    test('returns NaN for invalid input', () => {
        expect(ceil(NaN)).toBeNaN();
        expect(ceil('a')).toBeNaN();
        expect(ceil(undefined)).toBeNaN();
    });

    test('handles edge cases', () => {
        expect(ceil(0)).toBe(0); // Edge case for 0
        expect(ceil(-0.1)).toBe(-0); // Rounds up from negative fractional
        expect(ceil(Number.MAX_VALUE)).toBe(Number.MAX_VALUE); // Extreme large number
    });
});