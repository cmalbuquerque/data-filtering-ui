import { parseProperties, parseOperators } from './parsers';

describe('parsers', () => {
    test('should parse properties correctly', () => {
        const properties = [
            { id: 1, name: 'Property1', extra: 'extra1' },
            { id: 2, name: 'Property2', extra: 'extra2' },
        ];
        const expected = [
            { id: 1, name: 'Property1' },
            { id: 2, name: 'Property2' },
        ];
        expect(parseProperties(properties)).toEqual(expected);
    });

    test('should return an empty array when parseProperties input is empty', () => {
        expect(parseProperties([])).toEqual([]);
    });

    test('should parse operators correctly', () => {
        const operators = [
            { id: 1, text: 'Operator1', extra: 'extra1' },
            { id: 2, text: 'Operator2', extra: 'extra2' },
        ];
        const expected = [
            { id: 1, name: 'Operator1' },
            { id: 2, name: 'Operator2' },
        ];
        expect(parseOperators(operators)).toEqual(expected);
    });

    test('should return an empty array when input parseOperators is empty', () => {
        expect(parseOperators([])).toEqual([]);
    });
});
