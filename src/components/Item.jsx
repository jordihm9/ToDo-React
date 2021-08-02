import React from 'react';

const Item = ({ item, toggleCompletedItem, removeItem }) => {
	/**
	 * Update the items reverting the completed status of the desired item
	 */
	function toggleCompletedHandler() {
		toggleCompletedItem(item);
	}

	function removeHandler() {
		removeItem(item);
	}

	return (
		<li className={`item ${item.completed ? 'completed' : ''}`}>
			<span data-testid="completed-checkbox" className="item__checkbox" onClick={toggleCompletedHandler}></span>
			<span className="item__text">{item.text}</span>
			<img src="/images/icons/bin.svg" alt="bin" className="bin__icon" onClick={removeHandler} />
		</li>
	);
}

export default Item;
