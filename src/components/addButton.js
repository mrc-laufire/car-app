import { React } from 'react';
import carManager from '../services/carManager';
import Remote from '../services/remote';

const AddButton = ({ state }) =>
	<button
		role="addButton"
		className="addButton"
		disabled={ carManager.isEmpty(state) }
		onClick={ () => Remote.addCar() }
	>
		Add
	</button>;

export default AddButton;
