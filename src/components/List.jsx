import React from 'react';

import Item from './Item';

const List = (props) => {
	return (
		<ul className="list">
			{props.data.map(item => (
				<Item
					key={item.id}
					item={item}
					items={props.data}
					setItems={props.setItems}
				/>
			))}
		</ul>
	);
}

export default List;