import React from 'react';
import { screen, render } from '@testing-library/react';

// import component to test
import Item from './../components/Item';

describe('<Item />', () => {
    test('should render the component as not completed', () => {
        const item = {
            id: 'item-1',
            text: 'hello world',
            completed: false
        }
    
        const items = [];
    
        render(<Item item={item} items={items} />);
        screen.getByText('hello world');
    });
});