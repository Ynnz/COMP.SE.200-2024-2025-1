import toNumber from '../../src/toNumber.js';

describe('toNumber', () => {
    test('converts numbers to numbers', () => {
        expect(toNumber(3.2)).toBe(3.2);
        expect(toNumber(-5)).toBe(-5);
        expect(toNumber(0)).toBe(0);
    });

    test('converts strings to numbers', () => {
        expect(toNumber('3.2')).toBe(3.2);
        expect(toNumber('0')).toBe(0);
        expect(toNumber('   42   ')).toBe(42);
        expect(toNumber('-123')).toBe(-123);
    });

    test('returns NaN for invalid strings', () => {
        expect(toNumber('abc')).toBeNaN();
        expect(toNumber('Infinity')).toBe(Infinity); // Infinity is a valid number
        expect(toNumber('0x123')).toBeNaN();
    });

    test('handles binary, octal, and hexadecimal strings', () => {
        expect(toNumber('0b101')).toBe(5); // Binary
        expect(toNumber('0o123')).toBe(83); // Octal
        expect(toNumber('0x1A')).toBeNaN(); // Bad Hexadecimal
    });

    test('handles special values', () => {
        expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE);
        expect(toNumber(Infinity)).toBe(Infinity);
        expect(toNumber(NaN)).toBeNaN();
    });

    test('handles objects with valueOf method', () => {
        const obj = { valueOf: () => 42 };
        expect(toNumber(obj)).toBe(42);

        const nestedObj = { valueOf: () => ({ valueOf: () => 100 }) };
        expect(toNumber(nestedObj)).toBe(100);
    });

    test('returns NaN for symbols', () => {
        expect(toNumber(Symbol('test'))).toBeNaN();
    });

    test('handles objects without valueOf', () => {
        const obj = {};
        expect(toNumber(obj)).toBeNaN();
    });

    test('returns the same value for non-convertible types', () => {
        expect(toNumber(null)).toBe(0);
        expect(toNumber(undefined)).toBeNaN();
    });
});