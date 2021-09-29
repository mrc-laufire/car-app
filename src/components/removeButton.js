import { React } from 'react';
import Remote from '../services/remote';

const RemoveButton = (id) =>
	<button
		role="removeButton"
		className="removeButton"
		onClick={ () => Remote.removeCar(id) }
	>
		X
	</button>;

export default RemoveButton;
