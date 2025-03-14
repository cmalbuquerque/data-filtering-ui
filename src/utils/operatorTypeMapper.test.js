import { getSupportedOperators } from './operatorTypeMapper';

describe('operatorTypeMapper', () => {
    test('should return correct operators for string type', () => {
        const result = getSupportedOperators('string');
        expect(result).toEqual(['equals', 'any', 'none', 'in', 'contains']);
    });

    test('should return correct operators for number type', () => {
        const result = getSupportedOperators('number');
        expect(result).toEqual(['equals', 'greater_than', 'less_than']);
    });

    test('should return correct operators for enumerated type', () => {
        const result = getSupportedOperators('enumerated');
        expect(result).toEqual(['equals', 'any', 'none', 'in']);
    });

    test('should return an empty array for unsupported type', () => {
        const result = getSupportedOperators('boolean');
        expect(result).toEqual([]);
    });

    test('should return an empty array for undefined type', () => {
        const result = getSupportedOperators(undefined);
        expect(result).toEqual([]);
    });

    test('should return an empty array for null type', () => {
        const result = getSupportedOperators(null);
        expect(result).toEqual([]);
    });
});