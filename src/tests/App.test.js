import React from 'react';
import { within, screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import App from './../App';

describe('<App />', () => {
	const todoText = 'Hello World!';

	beforeEach(() => {
		render(<App data={[]} />);
	});

	test('should render the component', ()=> {
		screen.getByLabelText('item-input'); // select the input with the correct aria label
	});

	describe('should add a new item by', () => {
		beforeEach(() => {
			updateInput(todoText);
		});
		
		test('clicking on the add button', ()=> {
			fireEvent.click(screen.getByTitle(/add/i));
			screen.getByText(todoText);
		});
		
		test('submitting the form', ()=> {
			fireEvent.submit(screen.getByTitle(/add/i));
			screen.getByText(todoText);
		});
	});

	// TODO:
	test('should toggle the completed status of the item', () => {
		updateInput(todoText);
		fireEvent.submit(screen.getByTitle(/add/i));

		updateInput('Test');
		fireEvent.submit(screen.getByTitle(/add/i));
		
		const item = screen.getByText(todoText).parentElement;
	
		fireEvent.click(within(item).getByTestId('completed-checkbox')); // mark as completed	
		expect(item).toHaveClass('completed');
		
		fireEvent.click(within(item).getByTestId('completed-checkbox')); // mark as NOT completed
		expect(item).not.toHaveClass('completed');
	});

	test('should remove an item and keep others', () => {
			updateInput(todoText);
			fireEvent.submit(screen.getByTitle(/add/i));

			updateInput('Test');
			fireEvent.submit(screen.getByTitle(/add/i));

			fireEvent.click(within(screen.getByText(todoText).parentElement).getByAltText('bin'));

			expect(screen.queryByText(todoText)).toBeNull();
	});

	function updateInput(text) {
		// simulate user writes down to the input
		fireEvent.change(screen.getByLabelText('item-input'), {
			target: {
				value: text
			}
		});
	}
});
