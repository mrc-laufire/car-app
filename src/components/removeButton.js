import { React } from 'react';
import Remote from '../services/remote';

const RemoveButton = (vehicleNumber) =>
	<button
		role="removeButton"
		className="removeButton"
		onClick={ () => Remote.removeCar(vehicleNumber) }
	>
		X
	</button>;

export default RemoveButton;
