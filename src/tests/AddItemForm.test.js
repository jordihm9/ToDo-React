import React from 'react';
import { render, fireEvent} from '@testing-library/react';

import AddItemForm from './../components/AddItemForm';

describe('<AddItemForm />', () => {
    test('should not add a new item if input is empty', () => {
        const mockAddItem = jest.fn();

        const wrapper = render(<AddItemForm addItem={mockAddItem} />);

        fireEvent.submit(wrapper.getByTitle(/add/i));

        expect(mockAddItem).toHaveBeenCalledTimes(0);
    })
});