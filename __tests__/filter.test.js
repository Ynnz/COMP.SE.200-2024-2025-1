import filter from '../src/filter.js';

describe('filter', () => {
    test('filters elements based on a predicate', () => {
        const users = [
            { user: 'barney', active: true },
            { user: 'fred', active: false },
        ];
        const result = filter(users, ({ active }) => active);
        expect(result).toEqual([{ user: 'barney', active: true }]);
    });

    test('returns an empty array when no elements match', () => {
        const users = [
            { user: 'barney', active: true },
            { user: 'fred', active: false },
        ];
        const result = filter(users, ({ active }) => !active);
        expect(result).toEqual([{ user: 'fred', active: false }]);
    });

    test('returns an empty array when input array is null or undefined', () => {
        expect(filter(null, () => true)).toEqual([]);
        expect(filter(undefined, () => true)).toEqual([]);
    });

    test('works with numbers and a custom predicate', () => {
        const numbers = [1, 2, 3, 4];
        const result = filter(numbers, (n) => n % 2 === 0);
        expect(result).toEqual([2, 4]);
    });

    test('handles an empty array', () => {
        expect(filter([], () => true)).toEqual([]);
    });

    test('predicate receives correct arguments', () => {
        const mockPredicate = jest.fn(() => true);
        const array = [1, 2, 3];
        filter(array, mockPredicate);
        expect(mockPredicate).toHaveBeenCalledTimes(3);
        expect(mockPredicate).toHaveBeenCalledWith(1, 0, array);
        expect(mockPredicate).toHaveBeenCalledWith(2, 1, array);
        expect(mockPredicate).toHaveBeenCalledWith(3, 2, array);
    });
});
