import React from 'react';
import ReactDOM from 'react-dom';

import ToDoManager from './components/ToDoManager';

ReactDOM.render(
	<ToDoManager data={[]}/>,
	document.getElementById('root')
);
