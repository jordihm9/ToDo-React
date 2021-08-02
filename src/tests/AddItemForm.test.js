import React from 'react';
import { screen, render, fireEvent} from '@testing-library/react';

import AddItemForm from './../components/AddItemForm';

describe('<AddItemForm />', () => {
    test('should not add a new item if input is empty', () => {
        const mockAddItem = jest.fn();

        render(<AddItemForm addItem={mockAddItem} />);

        fireEvent.submit(screen.getByTitle(/add/i));

        expect(mockAddItem).toHaveBeenCalledTimes(0);
    });
});