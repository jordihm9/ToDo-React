import React from 'react';

const Item = ({item, items, setItems}) => {
	/**
	 * Update the items reverting the completed status of the desired item
	 */
	function completedHandler() {
		// update the items list
		setItems(items.map(el => {
			// search for the item with the same id
			if (el.id === item.id) {
				el.completed = !el.completed; // reverse the completed status
			}

			return el;
		}));
	}

	return (
		<li className="item">
			<span className={`item__checkbox ${item.completed ? 'completed' : ''}`} onClick={completedHandler}></span>
			<span className="item__text">{item.text}</span>
		</li>
	);
}

export default Item;
