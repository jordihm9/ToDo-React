import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import AddItemForm from './AddItemForm';
import List from './List';

const ToDoManager = (props) => {
	const [items, setItems] = useState(props.data);

	/**
	 * Append the current list of items with the new item, 
	 * setting the completed to false by default 
	 * @param {string} item text of the to do item
	 */
	function addItem(item) {
		setItems([
			...items,
			{
				id: uuidv4(), // create an id using uuid
				text: item,
				completed: false
			}
		]);
	}

	return (
		<React.Fragment>
			<div className="title">To Do App</div>
			<div className="container list">
				<AddItemForm addItem={addItem} />
				<List data={items} setItems={setItems} />
			</div>
		</React.Fragment>
	);
}

export default ToDoManager;
