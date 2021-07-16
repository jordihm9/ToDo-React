import React, { useState } from 'react';

import AddItemForm from './AddItemForm';
import List from './List';

const ToDoManager = (props) => {
	const [items, setItems] = useState(props.data);

	function addItem(item) {
		setItems([...items, item]);
	}

	return (
		<div className="container list">
			<AddItemForm addItem={addItem} />
			<List data={items} />
		</div>
	);
}

export default ToDoManager;
