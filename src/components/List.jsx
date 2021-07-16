import React from 'react';

import Item from './Item';

const List = (props) => {
	return (
		<ul className="list">
			{props.data.map((item, index) => (
				<Item key={index} name={item} />
			))}
		</ul>
	);
}

export default List;