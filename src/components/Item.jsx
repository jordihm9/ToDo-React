import React from 'react';

const Item = ({item, items, setItems, }) => {
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

	function removeHandler() {
		setItems(items.reduce((acc, val) => {
			if (val.id !== item.id) {
				acc.push(val);
			}
			return acc;
		}, []));
	}

	return (
		<li className={`item ${item.completed ? 'completed' : ''}`}>
			<span data-testid="completed-checkbox" className="item__checkbox" onClick={completedHandler}></span>
			<span className="item__text">{item.text}</span>
			<img src="/images/icons/bin.svg" alt="bin" className="bin__icon" onClick={removeHandler} />
		</li>
	);
}

export default Item;
