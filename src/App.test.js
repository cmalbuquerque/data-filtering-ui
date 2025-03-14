import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App Component', () => {
    test('renders component', () => {
        render(<App />);
        expect(screen.getByRole('button', { name: /clear filters/i })).toBeInTheDocument();
        expect(screen.getByLabelText('Select property')).toBeInTheDocument();
        expect(screen.getByLabelText('Select operator')).toBeInTheDocument();
    });

    test('clear filters button resets the filters and data table', async () => {
        render(<App />);
        const propertyDropdown = document.querySelector('div[aria-label="Select property"] div[role="combobox"]');
        await userEvent.click(propertyDropdown);
        const colorOption = document.querySelector('li[role="option"][data-value="1"]');
        await userEvent.click(colorOption);

        const operatorDropdown = document.querySelector('div[aria-label="Select operator"] div[role="combobox"]');
        await userEvent.click(operatorDropdown);
        const equalsOption = document.querySelector('li[role="option"][data-value="equals"]');
        await userEvent.click(equalsOption);

        const clearFiltersButton = screen.getByRole('button', { name: /clear filters/i });
        await userEvent.click(clearFiltersButton);
    });
});