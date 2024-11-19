import map from '../src/map.js';

describe('map', () => {
    test('maps values to their squares', () => {
        function square(n) {
            return n * n;
        }
        const result = map([4, 8], square);
        expect(result).toEqual([16, 64]);
    });

    test('maps values with index', () => {
        const result = map([10, 20, 30], (value, index) => value + index);
        expect(result).toEqual([10, 21, 32]);
    });

    test('returns an empty array when input array is null or undefined', () => {
        expect(map(null, () => true)).toEqual([]);
        expect(map(undefined, () => true)).toEqual([]);
    });

    test('handles an empty array', () => {
        expect(map([], (value) => value * 2)).toEqual([]);
    });

    test('iteratee receives correct arguments', () => {
        const mockIteratee = jest.fn((value) => value);
        const array = [1, 2, 3];
        map(array, mockIteratee);
        expect(mockIteratee).toHaveBeenCalledTimes(3);
        expect(mockIteratee).toHaveBeenCalledWith(1, 0, array);
        expect(mockIteratee).toHaveBeenCalledWith(2, 1, array);
        expect(mockIteratee).toHaveBeenCalledWith(3, 2, array);
    });

    test('maps strings to their lengths', () => {
        const result = map(['one', 'two', 'three'], (str) => str.length);
        expect(result).toEqual([3, 3, 5]);
    });

    test('works with objects in the array', () => {
        const objects = [{ a: 1 }, { a: 2 }, { a: 3 }];
        const result = map(objects, (obj) => obj.a * 2);
        expect(result).toEqual([2, 4, 6]);
    });
});
