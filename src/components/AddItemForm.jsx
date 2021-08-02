import React, { useState } from 'react';

const AddItemForm = ({ addItem }) => {
	const [item, setItem] = useState('');

	function handleSubmit(e) {
		e.preventDefault(); // prevent submiting
		if (item === '') return; // validate the item is not empty
		// call the function passed by props from the parent component (ToDoManager)
		addItem(item); // add the new item to the lists
		setItem(''); // clear the input field
	}

	function handleChange(e) {
		setItem(e.target.value);
	}

	return (
		<form method="POST" onSubmit={handleSubmit} className="item-input">
			<input type="text" name="item-input" id="item-input" value={item} placeholder="Add to do..." aria-label="item-input" onChange={handleChange} className="item" required autoFocus />
			<span title="Add" className="cross" onClick={handleSubmit}></span>
		</form>
	);
}

export default AddItemForm;
