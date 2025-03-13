import React from 'react';
import { render, screen } from '@testing-library/react';
import SelectDropdown from './SelectDropdown';
import userEvent from '@testing-library/user-event';

describe('SelectDropdown Component', () => {
    const listItems = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
    ];
    const customPlaceholder = 'Select a property';
    const setSelected = jest.fn();

    test('renders select dropdown component with custom properties', async () => {
        render(<SelectDropdown listItems={listItems} placeholder={customPlaceholder} setSelected={setSelected} />);
        await userEvent.click(screen.queryByRole("combobox"));
        expect(screen.getByText('Item 1')).toBeInTheDocument();
        expect(screen.getByText('Item 2')).toBeInTheDocument();
        expect(screen.getByText('Item 3')).toBeInTheDocument();
    });

    test('when selecting an item, the setSelect callback should be called', async () => {
        render(<SelectDropdown listItems={listItems} placeholder={customPlaceholder} setSelected={setSelected} />);
        await userEvent.click(screen.queryByRole("combobox"));
        await userEvent.click(screen.getByText('Item 2'));
        expect(setSelected).toHaveBeenCalledTimes(1);
    });
});