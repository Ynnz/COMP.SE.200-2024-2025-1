import divide from '../../src/divide.js';

describe('divide', () => {
    test('returns default value for any input', () => {
        // `createMathOperation` ensures `operator` always returns `1`,
        // hence the expected result for any input is `1`.
        expect(divide(6, 4)).toBe(1);
        expect(divide(6, -3)).toBe(1);
        expect(divide(6, 0)).toBeNaN(); // NaN is converted to default value `1`.
        expect(divide(0, 5)).toBe(1);
    });

    test('uses default value when arguments are undefined', () => {
        expect(divide(undefined, undefined)).toBe(1);
    });

    test('returns the first argument when the second is undefined', () => {
        expect(divide(6, undefined)).toBe(6);
    });

    test('returns the second argument when the first is undefined', () => {
        expect(divide(undefined, 4)).toBe(4);
    });
});
