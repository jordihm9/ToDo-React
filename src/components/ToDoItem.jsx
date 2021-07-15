import React from 'react';
// import ReactDOM from 'react-dom';

function ToDoItem(props) {
	return <li className="item">{props.name}</li>;
}

export default ToDoItem;
