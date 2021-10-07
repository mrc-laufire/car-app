import { React } from 'react';
import Remote from '../services/remote';

const RemoveButton = (context, id) =>
	<button
		role="removeButton"
		className="removeButton"
		onClick={ () => Remote.removeCar(context, id) }
	>
		X
	</button>;

export default RemoveButton;
