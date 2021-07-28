import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import ToDoManager from './../components/ToDoManager';

describe('<ToDoManager />', () => {
	let wrapper;
	let todoText = 'Hello World!';

	beforeEach(() => {
		wrapper = render(<ToDoManager data={[]} />);
	})

	test('should render the component', ()=> {
		wrapper.getByLabelText('item-input'); // select the input with the correct aria label
	})

	describe('should add a new item by', () => {
		beforeEach(() => {
			updateInput(todoText);
		});

		afterEach(() => {
			wrapper.getByText(todoText);
		})
		
		test('clicking on the add button', ()=> {
			fireEvent.click(wrapper.getByTitle(/add/i));
		});
		
		test('submitting the form', ()=> {
			fireEvent.submit(wrapper.getByTitle(/add/i));
		});
	});

	// TODO:
	// describe('should toggle the completed status of the item', () => {
	// 	beforeEach(() => {
	// 		updateInput(todoText);

	// 		fireEvent.submit(wrapper.getByTitle(/add/i));
	// 	});

	// 	test('click on the checkbox and set the item to completed', () => {
	// 		const item = wrapper.getByText(todoText);
	// 	});
	// 	test('click on the checkbox and set the item to not completed', () => {
	// 	});
	// });

	describe('should remove the item by', () => {
		test('clicking on the bin icon', () => {
			updateInput(todoText);
			fireEvent.submit(wrapper.getByTitle(/add/i));

			fireEvent.click(wrapper.getByAltText('bin'));

			expect(wrapper.queryByText(todoText)).toBeNull();
		});
	});

	function updateInput(text) {
		// simulate user writes down to the input
		fireEvent.change(wrapper.getByLabelText('item-input'), {
			target: {
				value: text
			}
		});
	}
});
