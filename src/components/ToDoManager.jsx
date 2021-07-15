import React, { useState } from 'react';

import AddItemForm from './AddItemForm';
import ToDoList from './ToDoList';

function ToDoManager(props) {
	const [data, setItems] = useState(props.data);

	function addItem(item) {
		setItems([...data, item]);
	}

	return (
		<div className="container list">
			<AddItemForm addItem={addItem} />
			<ToDoList data={data} />
		</div>
	);
}

export default ToDoManager;
