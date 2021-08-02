import React from 'react';

import Item from './Item';

const List = ({ items, setItems }) => {
	/**
	 * Update the items list toggling the completed status
	 * @param {object} item item to toggle the completed status of the
	 */
	 function toggleCompletedItem(item) {
		// update the items list
		setItems(items.map(el => {
			// search for the item with the same id
			if (el.id === item.id) {
				el.completed = !el.completed; // reverse the completed status
			}

			return el;
		}));
	}

	/**
	 * Update the items list removing the item
	 * @param {object} item item to remove from the lists
	 */
	function removeItem(item) {
		setItems(items.reduce((acc, val) => {
			if (val.id !== item.id) {
				acc.push(val);
			}
			return acc;
		}, []));
	}
	return (
		<ul className="list">
			{items.map(item => (
				<Item
					key={item.id}
					item={item}
					toggleCompletedItem={toggleCompletedItem}
					removeItem={removeItem}
				/>
			))}
		</ul>
	);
}

export default List;