import { applyFilter } from './filterUtils';

describe('applyFilter', () => {
    const products = [
        { name: 'Product 1', price: 100, category: 'Electronics' },
        { name: 'Product 2', price: 200, category: 'Clothing' },
        { name: 'Product 3', price: 150, category: 'Electronics' },
        { name: 'Product 4', price: 50, category: 'Clothing' },
    ];

    test('should return all products if no filter is applied', () => {
        const result = applyFilter(products, null, null, null);
        expect(result).toEqual(products);
    });

    test('should filter products by equals operator', () => {
        const result = applyFilter(products, { name: 'category' }, { id: 'equals' }, { name: 'Electronics' });
        expect(result).toEqual([
            { name: 'Product 1', price: 100, category: 'Electronics' },
            { name: 'Product 3', price: 150, category: 'Electronics' },
        ]);
    });

    test('should filter products by contains operator', () => {
        const result = applyFilter(products, { name: 'name' }, { id: 'contains' }, { name: 'Product' });
        expect(result).toEqual(products);
    });

    test('should filter products by greater_than operator', () => {
        const result = applyFilter(products, { name: 'price' }, { id: 'greater_than' }, { name: 100 });
        expect(result).toEqual([
            { name: 'Product 2', price: 200, category: 'Clothing' },
            { name: 'Product 3', price: 150, category: 'Electronics' },
        ]);
    });

    test('should filter products by less_than operator', () => {
        const result = applyFilter(products, { name: 'price' }, { id: 'less_than' }, { name: 150 });
        expect(result).toEqual([
            { name: 'Product 1', price: 100, category: 'Electronics' },
            { name: 'Product 4', price: 50, category: 'Clothing' },
        ]);
    });

    test('should filter products by in operator', () => {
        const result = applyFilter(products, { name: 'category' }, { id: 'in' }, { name: ['Electronics', 'Clothing'] });
        expect(result).toEqual(products);
    });

    test('should filter products by none operator', () => {
        const result = applyFilter(products, { name: 'category' }, { id: 'none' }, { name: ['Electronics'] });
        expect(result).toEqual([
            { name: 'Product 2', price: 200, category: 'Clothing' },
            { name: 'Product 4', price: 50, category: 'Clothing' },
        ]);
    });

    test('should filter products by any operator', () => {
        const result = applyFilter(products, { name: 'category' }, { id: 'any' }, { name: ['Electronics', 'Clothing'] });
        expect(result).toEqual(products);
    });
});