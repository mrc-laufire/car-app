import { React } from 'react';
import context from '../core/context';

const RemoveButton = (vehicleNumber) =>
	<button
		role="removeButton"
		className="removeButton"
		onClick={ () => context.actions.removeCar(vehicleNumber) }
	>
		X
	</button>;

export default RemoveButton;
