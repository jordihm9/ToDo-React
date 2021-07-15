import React from 'react';

import ToDoItem from './ToDoItem';

function ToDoList(props) {
	return (
		<ul className="list">
			{props.data.map((item, index) => (
				<ToDoItem key={index} name={item} />
			))}
		</ul>
	);
}

export default ToDoList;
