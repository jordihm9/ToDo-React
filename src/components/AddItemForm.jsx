import React, { useState } from 'react';
// import ReactDOM from 'react-dom';

function AddItemForm(props) {
	const [item, setItem] = useState('');

	function handleSubmit(e) {
		e.preventDefault(); // prevent submiting
		if (item === '') return; // validate the item is not empty
		// call the function passed by props from the parent component
		props.addItem(item); // add the new item to the list
		setItem(''); // clear the input field
	}

	function handleChange(e) {
		setItem(e.target.value);
	}

	return (
		<form method="POST" onSubmit={handleSubmit} className="item-input">
			<input type="text" name="item-name" id="item-name" value={item} placeholder="Add to do..." onChange={handleChange} className="item" required autoFocus />
			<span title="Add" className="cross" onClick={handleSubmit}></span>
		</form>
	);
}

export default AddItemForm;