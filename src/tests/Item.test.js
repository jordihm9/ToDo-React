import React from 'react';
import { render } from '@testing-library/react';

// import component to test
import Item from './../components/Item';

describe('<Item />', () => {
    let wrapper;
    
    // execute this before each test
    beforeEach(() => {
        const item = {
            id: 'item-1',
            text: 'hello world',
            completed: false
        }

        const items = [];

        wrapper = render(<Item item={item} items={items} />);
    });

    test('should render the component as not completed', () => {
        wrapper.getByText('hello world');
    });
});