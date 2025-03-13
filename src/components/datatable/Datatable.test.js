import React from 'react';
import { render, screen } from '@testing-library/react';
import Datatable from './Datatable';

describe('Datatable Component', () => {
    const headers = [
        { name: 'Name' },
        { name: 'Age' },
        { name: 'Address' }
    ];

    const data = [
        { Name: 'John Doe', Age: 28, Address: '123 Main St' },
        { Name: 'Jane Smith', Age: 34, Address: '456 Oak St' }
    ];

    test('renders table headers correctly', () => {
        render(<Datatable headers={headers} data={data} />);
        headers.forEach(header => {
            expect(screen.getByText(header.name)).toBeInTheDocument();
        });
    });

    test('renders table data correctly', () => {
        render(<Datatable headers={headers} data={data} />);
        data.forEach(row => {
            headers.forEach(header => {
                expect(screen.getByText(row[header.name])).toBeInTheDocument();
            });
        });
    });

    test('renders correct number of rows', () => {
        render(<Datatable headers={headers} data={data} />);
        const rows = screen.getAllByRole('row');
        expect(rows).toHaveLength(data.length + 1);
    });

    test('renders correct number of columns', () => {
        render(<Datatable headers={headers} data={data} />);
        const columns = screen.getAllByRole('columnheader');
        expect(columns).toHaveLength(headers.length);
    });
});