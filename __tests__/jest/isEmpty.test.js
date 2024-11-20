import isEmpty from '../../src/isEmpty.js';

describe('isEmpty', () => {
    test('returns true for null or undefined', () => {
        expect(isEmpty(null)).toBe(true);
        expect(isEmpty(undefined)).toBe(true);
    });

    test('returns true for non-collection types without contents', () => {
        expect(isEmpty(true)).toBe(true);
        expect(isEmpty(1)).toBe(true);
        expect(isEmpty('')).toBe(true);
    });

    test('returns false for non-empty arrays', () => {
        expect(isEmpty([1, 2, 3])).toBe(false);
        expect(isEmpty(['a', 'b', 'c'])).toBe(false);
    });

    test('returns true for empty arrays', () => {
        expect(isEmpty([])).toBe(true);
    });

    test('returns false for non-empty strings', () => {
        expect(isEmpty('abc')).toBe(false);
        expect(isEmpty(' ')).toBe(false); // Non-empty string with a space
    });

    test('returns true for empty objects', () => {
        expect(isEmpty({})).toBe(true);
    });

    test('returns false for non-empty objects', () => {
        expect(isEmpty({ a: 1 })).toBe(false);
        expect(isEmpty({ key: 'value' })).toBe(false);
    });

    test('returns true for empty maps and sets', () => {
        expect(isEmpty(new Map())).toBe(true);
        expect(isEmpty(new Set())).toBe(true);
    });

    test('returns false for non-empty maps and sets', () => {
        const map = new Map();
        map.set('key', 'value');
        expect(isEmpty(map)).toBe(false);

        const set = new Set();
        set.add(1);
        expect(isEmpty(set)).toBe(false);
    });

    test('returns true for objects without own enumerable string-keyed properties', () => {
        function Proto() {}
        Proto.prototype.method = function () {};
        const instance = new Proto();
        expect(isEmpty(instance)).toBe(true);
    });

    test('returns true for empty buffers', () => {
        const buffer = Buffer.alloc(0);
        expect(isEmpty(buffer)).toBe(true);
    });

    test('returns false for non-empty buffers', () => {
        const buffer = Buffer.from([1, 2, 3]);
        expect(isEmpty(buffer)).toBe(false);
    });

    test('handles array-like objects', () => {
        const args = (function () {
            return arguments;
        })(1, 2, 3);
        expect(isEmpty(args)).toBe(false);

        const emptyArgs = (function () {
            return arguments;
        })();
        expect(isEmpty(emptyArgs)).toBe(true);
    });

    test('returns true for other falsy values', () => {
        expect(isEmpty(false)).toBe(true);
        expect(isEmpty(0)).toBe(true);
    });
});